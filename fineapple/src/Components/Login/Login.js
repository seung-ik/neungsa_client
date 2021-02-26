import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Login.css";
import Logo from "../../img/logo_main.png";
import kakao from "../../img/login/kakao.png";
import google from "../../img/login/google.png";
import email from "../../img/login/email.png";
import facebook from "../../img/login/facebook.png";
import bounce from "./bounce.gif";

function Login() {
  return (
    <div>
      <div className="login_page">
        <div className="login_container">
          <div className="login_header">
            <span>
              <img
                src={bounce}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
            </span>
            <h1>Fineapple</h1>
          </div>
          <Link to="/login/google" className="login__links">
            <button className="login_button">
              <span>
                <img src={google} alt="" className="login_logo" />
              </span>
              <span>Continue with google</span>
            </button>
          </Link>
          <Link to="/login/facebook" className="login__links">
            <button className="login_button">
              <span>
                <img src={facebook} alt="" className="login_logo" />
              </span>
              <span>Continue with Facebook</span>
            </button>
          </Link>
          <Link to="/login/kakao" className="login__links">
            <button className="login_button">
              <span>
                <img src={kakao} alt="" className="login_logo" />
              </span>
              <span>Continue with Kakao</span>
            </button>
          </Link>
          <Link to="/login/email" className="login__links">
            <button className="login_button">
              <span>
                <img src={email} alt="" className="login_logo" />
              </span>
              <span>Continue with Email</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
