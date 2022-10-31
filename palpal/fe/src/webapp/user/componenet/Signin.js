import React, { useState } from "react";
import { useNavigate } from "react-router";
// import { UserSigninDataAPI, UserAuthDataAPI } from "../../api/userApi";
import styles from "../style/Signin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signin;

  const signinButton = () => {
    alert("로그인버튼누름");
    sessionStorage.setItem("username", username);

    if (username === "" || password === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignin({
      ...signin,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.signinBox}>
        <div className={styles.title}>
          <spna className={styles.titleText}>Login</spna>
        </div>

        <div className={styles.body}>
          <input
            className={styles.usernameBox}
            type="text"
            placeholder="아이디를 입력하세요."
            name="username"
            onChange={handleChange}
          />
          <input
            className={styles.passwordBox}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handleChange}
          />
          <div className={styles.signinBtnBox}>
            <button className={styles.signinButton} onClick={signinButton}>
              <span className={styles.signinBtnText}>Login</span>
            </button>
          </div>
          <span className={styles.guidePharse}>
            Don't have an account?
            <span className={styles.guidePharseSignup}>
              <a href="/users_signup">Sign up</a>
            </span>
          </span>
          <div className={styles.divide}>
            <hr className={styles.divideLine1} />
            <span className={styles.divideSNS}>SNS</span>
            <hr className={styles.divideLine2} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
