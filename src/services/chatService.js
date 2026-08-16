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
  updateDoc
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
