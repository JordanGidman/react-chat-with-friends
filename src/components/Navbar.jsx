import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BurgerButton from "./BurgerButton";

function Navbar({ sidebarClass, setSidebarClass }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      {sidebarClass === "show-sidebar" && (
        <BurgerButton onClick={() => setSidebarClass("sidebar")} />
      )}
      <h1 className="logo logo-home">GiddyChat</h1>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;
