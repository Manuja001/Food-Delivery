import React from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = React.useState("Sign-up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Log-in" ? (
            <></>
          ) : (
            <input type="text" placeholder="Username" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{currentState === "Sign-up" ? "Sign Up" : "Log In"}</button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>I Agree to terms & conditions</p>
        </div>
        {currentState === "Sign-up" ? (
          <p>
            Already have an Account?
            <span onClick={() => setCurrentState("Log-in")}> Click here</span>
          </p>
        ) : (
          <p>
            Create New Account?
            <span onClick={() => setCurrentState("Sign-up")}> Click here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
