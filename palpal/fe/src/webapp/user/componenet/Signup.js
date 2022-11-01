import React, { useCallback, useState } from "react";
import { Button, Form } from "semantic-ui-react";
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

      setSignup({
        ...signup,
        [name]: value,
      });
    },
    [signup]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const result = window.confirm("회원가입을 진행하시겠습니까?");

    if (result) {
      UserSignupDataAPI(signup)
        .then((res) => {
          if (res?.data?.code === 200) {
            alert(`${res?.data?.user?.email}로 회원가입 완료`);
            navigate("/users_signin");
          } else {
            alert("회원가입 실패");
          }
        })
        .catch((err) => console.error("user signup data api error : ", err));
    }
  };

  return (
    <>
      <div className={styles.signupContiner}>
        <div className={styles.title}>
          <span className={styles.titleText}>SignUp</span>
        </div>
        <div className={styles.signupBody}>
          <span>이메일</span>
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
