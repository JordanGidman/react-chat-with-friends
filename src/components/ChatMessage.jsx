function ChatMessage() {
  return (
    <div className="chat-message message-owner">
      <div className="chat-message-info">
        <img
          src="https://images.pexels.com/photos/14382821/pexels-photo-14382821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="chat-message-content">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/14382821/pexels-photo-14382821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatMessage;
