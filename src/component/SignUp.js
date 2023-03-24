import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    axios
      .post("/", {
        userName,
        password,
      })

      .then(function (response) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        if (response.data.redirect === "/") {
          window.location = "/pagecontent";
        } else if (response.data.redirect === "/") {
          window.location = "/";
        }
      })
      .catch(function (error) {
        window.location = "/pagecontent";
      });
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Welcome</h1>
          <p>Enter Your username and password</p>

          <div className="form">
            <input className="inputs"
              placeholder={"Username"}
              type={"userName"}
              onChange={(e) => setUserName(e.target.value)}
              name={"userName"}
              value={userName}
            />{" "}
            <br /> <br />
            <input className="inputs"
              placeholder={"Password"}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              name={"password"}
              value={password}
            />{" "}
            <br /> <br />
            <button className="button" onClick={() => handleSignup()}>
              Login
            </button>
            <p>Forgot Password?</p>
          </div>
          <div className="footer">
        <p>terms of use <span>Privacy Policy</span></p>
        <p>@punctualiti2023. all right reserved</p>

      </div>
        </div>

        <div className="right">
          <div className="box">
            <div className="box-1"></div>
            <div className="box-2"></div>
          </div>
          <div className="content">
            <h1>360° solution for Asset Management</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur natus minus sunt est, dolor rem obcaecati cupiditate
            </p>
          </div>
        </div>

      </div>
      
    </>
  );
};

export default SignUp;
