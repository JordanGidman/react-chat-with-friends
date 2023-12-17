import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function ChatMessage({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const messageDate = message.date.toDate().toLocaleString("en-US", {
    dateStyle: "short",
  });

  const messageTime = message.date.toDate().toLocaleString("en-US", {
    timeStyle: "short",
  });

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`chat-message ${
        message.senderId === currentUser.uid && "message-owner"
      }`}
    >
      <div className="chat-message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>
          {messageDate !==
          new Date().toLocaleString("en-US", {
            dateStyle: "short",
          })
            ? messageDate
            : messageTime}
        </span>
      </div>
      <div className="chat-message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default ChatMessage;
