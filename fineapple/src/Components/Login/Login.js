import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Login.css";
import Logo from "../../img/logo_main.png";
import kakao from "../../img/kakao.png";
import google from "../../img/google.png";
import email from "../../img/email.png";

function Login() {
    return (
        <div>
            <div className="login_container">
                {/* <img src={Logo} alt="Fineapple logo" className="login_head" /> */}
                <Link to="/login/kakao">
                    <img className="login_img" src={kakao} alt="kakao logo" />
                </Link>
                <Link to="/login/facebook">
                    <img
                        className="login_img"
                        src="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&ccb=3&_nc_sid=ad8a9d&_nc_ohc=_6Fp3lI7VH0AX9Wg3-p&_nc_ht=scontent-gmp1-1.xx&oh=527c41862928e6c53b8ad9b37f6b17b4&oe=605A9496"
                        alt="facebook logo"
                    />
                </Link>
                <Link to="/login/google">
                    <img className="login_img" src={google} alt="google logo" />
                </Link>
                <Link to="/login/email">
                    <img className="login_img" src={email} alt="google logo" />
                </Link>
                <p className="login_bottom">Lorem ipsum dolor sit.</p>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
