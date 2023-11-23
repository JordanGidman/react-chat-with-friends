import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
