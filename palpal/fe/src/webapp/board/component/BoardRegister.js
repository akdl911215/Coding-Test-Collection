import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardRegisterDataAPI } from "../../api/boardApi";
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
        if (res?.data?.code !== 200) {
          const result = window.confirm("로그인을 진행하시겠습니까?");

          if (result) {
            navigate("/users_signin");
            sessionStorage.setItem("signinPage", "/board_register");
          } else {
            navigate("/board_list");
          }
        }
      })
      .catch((err) =>
        console.error("board register token check error : ", err)
      );
  }, []);

  const registerUpload = () => {
    BoardRegisterDataAPI(register)
      .then((res) => {
        //
        console.log("res : ", res);
      })
      .catch((err) => console.error("board register data api error : ", err));
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
