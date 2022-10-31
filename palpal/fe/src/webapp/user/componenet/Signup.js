import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
// import GoHomeButton from "../../common/component/GoHomeButton";
import styles from "../style/Signup.module.css";
import { UserSignupDataAPI } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    nickname: "",
    posts: "",
  });

  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      console.log(`mame : ${name}, value : ${value}`);

      setSignup({
        ...signup,
        [name]: value,
      });
    },
    [signup]
  );
  useEffect(() => console.log("signup : ", signup), [signup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const result = window.confirm("회원가입을 진행하시겠습니까?");

    if (result) {
      alert("회원가입 완료");
      // signup.roles = "USER";
      console.log("signup : ", signup);

      UserSignupDataAPI(signup);
      // navigate("/users_signin");
    }
  };

  return (
    <>
      <div className={styles.signupContiner}>
        <div className={styles.title}>
          <span className={styles.titleText}>SignUp</span>
        </div>
        <div className={styles.signupBody}>
          <span>아이디</span>
          <input
            name="email"
            placeholder="이메일을 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>

          <span>비밀번호</span>
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>

          <span>닉네임</span>
          <input
            name="nickname"
            placeholder="닉네임을 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>
          <span>주소</span>
          <input
            name="posts"
            placeholder="주소를 입력하세요"
            className={styles.signupInput}
            onChange={handleChange}
          ></input>

          <div>
            <div className={styles.buttonStyle}>
              <Form.Field secondary control={Button} onClick={handleSubmit}>
                회원가입
              </Form.Field>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
