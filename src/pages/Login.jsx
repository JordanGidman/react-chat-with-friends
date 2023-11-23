function Login() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Giddy Chat</h1>
        <span className="subheading">Sign up</span>
        <form className="signup-form">
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
          <button className="sign-up-form-btn">Sign in</button>
        </form>
        <p className="signup-footer">Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default Login;
