function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo logo-home">Giddy Chat</h1>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14382821/pexels-photo-14382821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>Jordan</span>
        <button>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;
