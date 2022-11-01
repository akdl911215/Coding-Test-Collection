import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UserSigninDataAPI, UserAuthDataAPI } from "../../api/userApi";
import styles from "../style/Signin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = signin;

  const signinButton = () => {
    if (email === "" || password === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }
    const result = window.confirm("로그인을 진행하시겠습니까?");
    sessionStorage.setItem("email", email);

    if (result) {
      UserSigninDataAPI(signin)
        .then((res) => {
          console.log("res : ", res);
          if (res?.data?.code === 200) {
            alert("로그인 성공하였습니다.");
            sessionStorage.setItem("jwtToken", res?.data?.token);
            sessionStorage.setItem("email", res?.data?.email);
            sessionStorage.setItem("nickname", res?.data?.nickname);

            if (sessionStorage.getItem("signinPage") === null) {
              navigate("/");
            } else {
              navigate(sessionStorage.getItem("signinPage"));
              sessionStorage.removeItem("signinPage");
            }
          } else {
            alert("로그인 실패하였습니다.");
          }
        })
        .catch((err) => console.error("user signin data api : ", err));
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
            placeholder="이메일을 입력하세요."
            name="email"
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
