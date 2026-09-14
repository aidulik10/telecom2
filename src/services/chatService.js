// src/services/chatService.js
import { db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

/**
 * Сохраняет / обновляет профиль текущего пользователя в коллекции "users".
 * Вызывай это один раз после успешного логина (Google OAuth).
 */
export async function registerUserInFirestore(user) {
  if (!user?.id) return;
  const userRef = doc(db, "users", String(user.id));
  await setDoc(
    userRef,
    {
      id: user.id,
      name: user.name || user.email || "Անանուն",
      email: user.email || null,
      photoURL: user.picture || null,
      isOnline: true,
      lastSeen: serverTimestamp()
    },
    { merge: true }
  );
}

/** Помечает пользователя оффлайн (вызывать при закрытии/логауте) */
export async function setUserOffline(userId) {
  if (!userId) return;
  const userRef = doc(db, "users", String(userId));
  await updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
}

/**
 * Подписка на список всех зарегистрированных пользователей в реальном времени.
 * callback получает массив пользователей.
 * Возвращает функцию отписки (вызвать в useEffect cleanup).
 */
export function subscribeToUsers(currentUserId, callback) {
  const usersRef = collection(db, "users");
  return onSnapshot(usersRef, (snapshot) => {
    const users = snapshot.docs
      .map((d) => d.data())
      .filter((u) => String(u.id) !== String(currentUserId)); // не показываем самого себя
    callback(users);
  });
}

/** Генерирует стабильный ID чата для пары пользователей (не зависит от порядка) */
export function getChatId(uid1, uid2) {
  return [String(uid1), String(uid2)].sort().join("_");
}

/**
 * Подписка на сообщения конкретного чата в реальном времени.
 * Возвращает функцию отписки.
 */
export function subscribeToMessages(chatId, callback) {
  const messagesRef = collection(db, "chats", chatId, "messages");
  const q = query(messagesRef, orderBy("createdAt", "asc"));
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(messages);
  });
}

/** Отправляет сообщение в чат */
export async function sendMessageToFirestore(chatId, senderId, text) {
  const messagesRef = collection(db, "chats", chatId, "messages");
  await addDoc(messagesRef, {
    senderId: String(senderId),
    text,
    createdAt: serverTimestamp()
  });
}

// ===== ЗВОНКИ (Daily.co) =====

const DAILY_API_KEY = "d2fc4b883612b357c71984550c467e230f0058060a840c9ab21c807a2b1b14f6";
const DAILY_DOMAIN = "team-telecom-2"; // твой поддомен, без .daily.co

async function createDailyRoom(roomName) {
  const res = await fetch("https://api.daily.co/v1/rooms", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DAILY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: roomName,
      properties: {
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // комната живёт 1 час
        enable_screenshare: false
      }
    })
  });
  const data = await res.json();
  if (data.url) return data.url;
  // если комната с таким именем уже есть — просто используем её адрес
  return `https://${DAILY_DOMAIN}.daily.co/${roomName}`;
}

/** Инициировать звонок. type: "audio" | "video" */
export async function startCall(chatId, callerId, calleeId, type) {
  const roomName = `call-${chatId}-${Date.now()}`;
  const roomUrl = await createDailyRoom(roomName);
  const callRef = doc(db, "chats", chatId, "call", "current");
  await setDoc(callRef, {
    status: "ringing",
    callerId: String(callerId),
    calleeId: String(calleeId),
    type,
    roomUrl,
    startedAt: serverTimestamp()
  });
  return roomUrl;
}

/** Подписка на состояние звонка в конкретном чате */
export function subscribeToCall(chatId, callback) {
  const callRef = doc(db, "chats", chatId, "call", "current");
  return onSnapshot(callRef, (snap) => {
    callback(snap.exists() ? snap.data() : null);
  });
}

export async function acceptCall(chatId) {
  const callRef = doc(db, "chats", chatId, "call", "current");
  await updateDoc(callRef, { status: "active" });
}

export async function endCall(chatId) {
  const callRef = doc(db, "chats", chatId, "call", "current");
  await deleteDoc(callRef);
}