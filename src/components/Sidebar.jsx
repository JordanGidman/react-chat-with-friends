import Chats from "./Chats";
import FriendsList from "./FriendsList";
import Navbar from "./Navbar";
import Search from "./Search";

function Sidebar({ sidebarClass, setSidebarClass }) {
  return (
    <div className={sidebarClass}>
      <Navbar sidebarClass={sidebarClass} setSidebarClass={setSidebarClass} />
      <Search />
      <Chats sidebarClass={sidebarClass} setSidebarClass={setSidebarClass} />
    </div>
  );
}

export default Sidebar;
