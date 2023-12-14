import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

function Chats({ sidebarClass, setSidebarClass }) {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    async function getChats() {
      //get a live snapshot of userChats and set our state to be the returned data
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      //cleanup
      return () => {
        unsub();
      };
    }
    //ensure this function is only called once there is a current user
    if (currentUser.uid) getChats();
  }, [currentUser.uid]);

  function handleSelect(user) {
    dispatch({ type: "change_user", payload: user });
    if (sidebarClass === "show-sidebar") setSidebarClass("sidebar");
  }

  return (
    <div className="chats">
      {chats &&
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => {
            return (
              <div
                className="user-chat"
                key={chat[0]}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                <img src={chat[1].userInfo.photoURL} alt="" />
                <div className="user-chat-info">
                  <span>{chat[1].userInfo.displayName}</span>
                  <p>
                    {chat[1].lastMessage?.text.length > 70
                      ? chat[1].lastMessage?.text.slice(0, 70) + "..."
                      : chat[1].lastMessage?.text}
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Chats;
