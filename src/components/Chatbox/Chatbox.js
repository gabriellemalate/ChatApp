import React, { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    addDoc,
    serverTimestamp
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Chatbox.scss"

const sendMessage = async (message) => {
    if (message.trim() === "") {
        alert("Can't leave input empty")
        return;
    }
}

const ChatBox = () => {
    const [user] = useAuthState(auth);
    const formRef = useRef();
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newMessages = [];
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    newMessages.push({ ...change.doc.data(), id: change.doc.id });
                }
            });

            setMessages((prevMessages) => [...newMessages, ...prevMessages]);
        });
        return () => unsubscribe();
    }, []);

    // const testMessages = [{id: 1, name: "user1", text: "hi"}, {id: 2, name: "user2", text: "hey"}]

    const handleSubmit = async (event) => {
        event.preventDefault();
        const msgInput = formRef.current.messageInput.value;
        // console.log(formRef.current.messageInput.value);
        // const currentMessage = {name: "user1", text: formRef.current.messageInput.value}

        if (msgInput.trim() === "") {
            alert ("Can't send an empty message");
            return;
        }
        
        await addDoc(collection(db, "messages"), {
            text: msgInput,
            createdAt: serverTimestamp(),
            name: auth.currentUser.displayName,
        });
        
        
    }

    console.log(auth.currentUser.displayName)

    return (<main className="chatbox">
        <div className="chatbox__msgs-wrap">
            {messages.map((message) => {
                return (<div
                    key={message.id}
                    className={`user-message ${message.name}`}
                >
                    <p className="user-message__user">{message.name}</p>
                    <p className="user-message__message">{message.text}</p>
                </div>)
            })}
        </div>
        <form
            className="chatbox__form"
            ref={formRef}
            onSubmit={handleSubmit}
        >
            <div className="chatbox__form-eq">
                <label className="chatbox__label">New Message:</label>
                <input type="text" id="messageInput" name="messageInput" placeholder="Enter a message" className="chatbox__input" />
                <button className="send-button">Send</button>
            </div>
        </form>
    </main>
    )
}

export default ChatBox;