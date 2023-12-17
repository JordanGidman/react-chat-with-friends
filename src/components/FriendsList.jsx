import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

function FriendsList() {
  const [friendIds, setFriendIds] = useState([]);
  const [friends, setFriends] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    //Get all friends from firebase
    if (currentUser.uid) {
      const unsub = onSnapshot(doc(db, "friends", currentUser.uid), (doc) => {
        doc.exists() && setFriendIds(doc.data().friends);
      });

      return () => {
        unsub();
      };
    }
  }, [currentUser]);

  //pull the corresponding user data about the friends i.e picture and name
  useEffect(() => {
    if (friendIds.length > 0) {
      friendIds?.map(async (friend) => {
        const q = query(
          collection(db, "users"),
          where("uid", "==", friend.uid)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setFriends((prevFriends) => {
            if (prevFriends.find((friend) => friend.uid === doc.data().uid)) {
              return prevFriends;
            } else {
              return [...prevFriends, doc.data()];
            }
          });
        });
      });
    }
  }, [friendIds]);

  function handleSelect(user) {
    dispatch({ type: "change_user", payload: user });
  }

  return (
    <div className="friends-list">
      {/* we need a list of the current users friends and to then render them here */}
      <h3>Friends</h3>
      {friends?.map((friend) => {
        return (
          <div
            className="user-chat"
            key={friend.uid}
            onClick={() => handleSelect(friend)}
          >
            <img src={friend.photoURL} alt="" />
            <div className="user-chat-info">
              <span>{friend.displayName}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsList;
