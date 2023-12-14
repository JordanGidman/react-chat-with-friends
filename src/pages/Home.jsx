import { useState } from "react";
import Chat from "../components/Chat";
import FriendsList from "../components/FriendsList";
import Sidebar from "../components/Sidebar";

function Home() {
  const [sidebarClass, setSidebarClass] = useState("sidebar");

  return (
    <div className="home">
      <div className="home-container">
        <Sidebar
          sidebarClass={sidebarClass}
          setSidebarClass={setSidebarClass}
        />
        <Chat setSidebarClass={setSidebarClass} />
        <FriendsList />
      </div>
    </div>
  );
}

export default Home;
