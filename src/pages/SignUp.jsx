function SignUp() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Giddy Chat</h1>
        <span className="subheading">Sign up</span>
        <form className="signup-form">
          <input
            type="text"
            className="signup-inputs"
            placeholder="Dispaly Name"
          ></input>
          <input
            type="email"
            className="signup-inputs"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="signup-inputs"
            placeholder="password"
          ></input>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            className="signup-inputs"
          ></input>
          <label htmlFor="file" className="form-add-image-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="img-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>{" "}
            <span>Add a picture</span>
          </label>
          <button className="sign-up-form-btn">Sign Up</button>
        </form>
        <p className="signup-footer">Already have an account? Login</p>
      </div>
    </div>
  );
}

export default SignUp;
