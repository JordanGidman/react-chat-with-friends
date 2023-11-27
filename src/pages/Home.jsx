import Chat from "../components/Chat";
import FriendsList from "../components/FriendsList";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
        <FriendsList />
      </div>
    </div>
  );
}

export default Home;
