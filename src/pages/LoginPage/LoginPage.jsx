import React, { useState } from "react";
import "./LoginPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showvalid, setshowvalid] = useState(false);
  const [hide, sethide] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("logged in");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            className="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setshowvalid(true)}
          />
          <label className="email">Email</label>
          {email.length === 0 && showvalid && (
            <span className="span">Email must be entered</span>
          )}
          <input
            className="password"
            type={hide ? "text" : "password"}
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="password">Password</label>
          <FontAwesomeIcon
            size="sm"
            className={hide ? "icon1" : "icon"}
            icon={hide ? faEye : faEyeSlash}
            onClick={() => sethide(!hide)}
          />
          <p className="reset" onClick={() => alert("Password : admin123")}>
            Forget Password ?
          </p>
          <button type="submit">LOGIN</button>
          <p className="reset1">
            <span className="span-word">Don't have an account ? </span>
            <span
              className="span-signup"
              onClick={() =>
                alert("email : admin123@gmail.com\npassword : admin123")
              }
            >
              SignUp
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
