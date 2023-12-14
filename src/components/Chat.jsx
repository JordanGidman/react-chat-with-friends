import { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import BurgerButton from "./BurgerButton";

function Chat({ setSidebarClass }) {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  function showSidebar() {
    setSidebarClass("show-sidebar");
  }

  async function handleAddFriend() {
    try {
      await updateDoc(doc(db, "friends", currentUser.uid), {
        friends: arrayUnion({
          uid: data.user.uid,
        }),
      });
      console.log("friend added");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="chat">
      <div className="chat-info">
        <BurgerButton onClick={showSidebar} />
        <span>{data.user?.displayName}</span>
        <div className="chat-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="camera-icon"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="add-friend-icon"
            onClick={handleAddFriend}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="more-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
