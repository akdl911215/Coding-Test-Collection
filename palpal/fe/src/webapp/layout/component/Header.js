import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  return (
    <>
      <>
        <div className="menubar">
          <nav id="top-menu">
            <ul>
              <li>
                <Link to="/users_signup">회원가입</Link>
              </li>
              <li>
                <Link to="/users_signin">로그인</Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    alert("로그아웃을 진행합니다");

                    window.location.reload();
                  }}
                >
                  로그아웃
                </Link>
              </li>
              <li>
                <Link to="/board_list">게시판</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </>
  );
};
export default Header;
