import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo_footer.png";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={Logo} alt="footer logo" />
        </div>
        <div className="footer_github">
          <h3>Contact Team</h3>
          <div className="footer_github_container">
            <div>
              <div>
                [Front] 윤어진{" "}
                <a href="https://github.com/seung-ik">
                  <GitHubIcon style={{ color: "white" }} />
                </a>
              </div>
              <div>
                [Front] 오승익{" "}
                <a href="https://github.com/seung-ik">
                  <GitHubIcon style={{ color: "white" }} />
                </a>
              </div>
            </div>
            <div>
              <div>
                [Back] 최고훈{" "}
                <a href="https://github.com/seung-ik">
                  <GitHubIcon style={{ color: "white" }} />
                </a>
              </div>
              <div>
                [Back] 현승환{" "}
                <a href="https://github.com/seung-ik">
                  <GitHubIcon style={{ color: "white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content">
          <a href="https://www.notion.so/Fineaple-Team-bddb1e30e0274115a4a71f8be7953dde">
            <h4>회사 소개</h4>
          </a>

          <div>
            고객문의 <span>fineapleService@gmail.com</span>
          </div>
          <div>
            PR문의 <span>fineaplePr@gmail.com</span>
          </div>
          <div className="footer_cor"> © The Fineapple Co.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
