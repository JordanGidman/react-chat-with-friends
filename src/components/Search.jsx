function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/14382821/pexels-photo-14382821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="user-chat-info">
          <span>Jordan</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
