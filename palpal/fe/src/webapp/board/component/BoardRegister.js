import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthDataAPI } from "../../api/userApi";
import styles from "../style/BoardRegister.module.css";

const BoardRegister = () => {
  const navigate = useNavigate();

  const witerCheck =
    sessionStorage.getItem("nickname") === null
      ? ""
      : sessionStorage.getItem("nickname");
  const [register, setRegister] = useState({
    title: "",
    writer: witerCheck,
    content: "",
  });

  useEffect(() => console.log("register : ", register), [register]);
  useEffect(() => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          console.log("로그인 상태 확인 완료");
        } else {
          if (window.confirm("로그인을 진행하시겠습니까?")) {
            navigate("/users_signin");
            sessionStorage.setItem(
              "signinPage",
              "/investing_infomation_register"
            );
          }
        }
      })
      .catch((err) => console.error(`token, roles check error : ${err}`));
  }, []);

  const registerUpload = () => {
    //
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);

    setRegister({
      ...register,
      [name]: value,
    });
  });

  return (
    <>
      <div className={styles.board}>
        <div className={styles.active}>
          <div className={styles.titleBox}>
            <span>제목</span>
            <input
              placeholder="제목을 입력해주세요."
              className={styles.titleInput}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              name="content"
              onChange={handleChange}
              className={styles.contentInput}
            />
          </div>
          <div className={styles.btnBox}>
            <button className={styles.uploadBtn}>
              <span className={styles.uploadText} onClick={registerUpload}>
                업로드
              </span>
            </button>
            <button className={styles.cancelBtn}>
              <span
                className={styles.cancelText}
                onClick={() => {
                  if (window.confirm("작성을 취소하겠습니까?")) {
                    navigate("/board_list");
                  }
                }}
              >
                취소
              </span>
            </button>
            {/* <GoHomeButton /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardRegister;
