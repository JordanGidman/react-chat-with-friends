import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  async function handleSubmit() {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  }

  function handleKeyPress(e) {
    e.code === "Enter" && handleSubmit();
  }

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      {error && <span>Cannot find user with that name</span>}
      {user && (
        <div className="user-chat">
          <img src={user.photoURL} alt="" />
          <div className="user-chat-info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
