import React, { useState, useEffect, useRef } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton"

import {
  auth,
  signInWithGooglePopup,
  signOutUser,
  onAuthStateChangedListener,
  db,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "../firebase";

export default function Guestbook() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef();

  // AUTH LISTENER
  useEffect(() => {
    const unsub = onAuthStateChangedListener((u) => setUser(u));
    return () => unsub();
  }, []);

  // FIRESTORE LIVE LISTENER
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsub();
  }, []);

  // SCROLL TO BOTTOM
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // SIGN-IN
  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error("Sign in error:", err);
    }
  };

  // SIGN-OUT
  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  // SEND MESSAGE
  const send = async (text) => {
    if (!text.trim() || !user) return;

    try {
      await addDoc(collection(db, "guestbook"), {
        name: user.displayName || "Anonymous",
        uid: user.uid,
        text,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

  // DELETE MESSAGE
  const deleteMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "guestbook", id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div
      className={`relative flex h-screen overflow-hidden font-sans transition-colors duration-300 ${darkMode ? "bg-[#1E1E1E] text-gray-200" : "bg-[#FFFBEB] text-gray-800"
        }`}
    >
      {/* HOME BUTTON */}
      <div
        className={`fixed top-5 left-4 z-50 flex items-center gap-3 transition-all duration-300`}
      >
        <HomeButton darkMode={darkMode} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>



      {/* MAIN CONTENT */}
      <main className="flex-1 h-full overflow-hidden pl-6 pr-6 transition-all">
        {/* <section className="max-w-3xl mx-auto h-full flex flex-col mt-20 px-4 sm:px-6 overflow-hidden"> */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 h-full flex flex-col overflow-hidden pt-10 sm:pt-12">
   
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 mt-10">
            Guestbook <span className="text-green-500">🌱</span>
          </h1>

          <p className="text-sm opacity-80 mb-6">
            Sign in with Google to leave a message.
          </p>

          {/* INPUT CARD */}
          <div
            className={`w-full border rounded-lg px-4 py-4 mb-4 ${darkMode
                ? "border-gray-700 bg-[#2A2A2A]"
                : "border-gray-300 bg-white"
              }`}
          >
            {!user ? (
              <button
                onClick={handleSignIn}
                className="text-sm underline hover:text-green-600"
              >
                Sign in with Google
              </button>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
  <input
    id="guestInput"
    type="text"
    placeholder="Write a message..."
    className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none ${
      darkMode
        ? "bg-[#1E1E1E] border-gray-700 text-gray-200"
        : "bg-white border-gray-300 text-gray-800"
    }`}
  />
  <button
    onClick={() => {
      const input = document.getElementById("guestInput");
      send(input.value);
      input.value = "";
    }}
    className={`px-3 py-2 rounded-lg shadow text-sm ${
      darkMode ? "bg-white text-black" : "bg-black text-white"
    }`}
  >
    Send
  </button>
</div>

                <button
                  onClick={handleSignOut}
                  className="text-xs underline opacity-60 hover:opacity-100"
                >
                  Sign out
                </button>
              </>
            )}
          </div>

          {/* MESSAGES BOX */}
          <div
            className={`flex-1 overflow-y-auto border rounded-lg ${darkMode
                ? "border-gray-700 bg-[#2A2A2A]"
                : "border-gray-300 bg-white"
              }`}
          >
            <ul className="divide-y divide-gray-300 dark:divide-gray-700 px-2">
              {messages.map((msg) => (
                <li key={msg.id} className="p-2 relative">
                  <div
                    className={`px-4 py-2 rounded-lg shadow-sm max-w-[95%] ${darkMode
                        ? "bg-[#1E1E1E] border border-gray-700 text-gray-200"
                        : "bg-[#FFF7D1] border border-gray-300 text-gray-800"
                      }`}
                  >

                    <span className="font-semibold">{msg.name}:</span>{" "}
                    <span>{msg.text}</span>
                  </div>

                  {/* ALWAYS VISIBLE DELETE BUTTON */}
                  {user?.uid === msg.uid && (
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 
               text-red-500 hover:text-red-600 font-bold
               p-1 rounded-full transition"
                    >
                      ✕
                    </button>
                  )}

                </li>
              ))}

              <div ref={bottomRef}></div>
            </ul>
          </div>

          {/* FOOTER */}
          <footer className="text-center py-4 opacity-70">
            <Footer darkMode={darkMode} />
          </footer>
        </section>
      </main>
    </div>
  );
}
