import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h1 className="logo logo-home">Giddy Chat</h1>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;
