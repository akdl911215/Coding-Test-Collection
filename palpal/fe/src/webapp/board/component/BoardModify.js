import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardIdReadDataAPI, BoardModifyDataAPI } from "../../api/boardApi";
import { UserAuthDataAPI } from "../../api/userApi";
import styles from "../style/BoardModify.module.css";

const BoardModify = () => {
  const navigate = useNavigate();

  const [modify, setModify] = useState({
    content: "",
    nickname: "",
    title: "",
  });

  useEffect(() => {
    BoardIdReadDataAPI({
      boardId: Number(sessionStorage.getItem("boardId")),
    })
      .then((res) => {
        setModify(res?.data?.success[0]);
      })
      .catch((err) => console.error("investing read board id error : ", err));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setModify({
      ...modify,
      [name]: value,
    });
  });

  const modifyBtn = () => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          BoardModifyDataAPI({
            boardId: Number(sessionStorage.getItem("boardId")),
            ...modify,
          })
            .then((res) => {
              if (res?.data?.code === 200) {
                alert("수정 성공");
              }
            })
            .catch((err) => console.error("board modify data error : ", err));

          navigate("/board_list");
        } else {
          const signin = window.confirm(
            "로그인이 필요한 기능입니다. 로그인을 진행하시겠습니까?"
          );

          if (signin) {
            navigate("/users_signin");
          }
        }
      })
      .catch((err) => console.error("investing modify ayth error : ", err));
  };

  return (
    <div>
      <div className={styles.board}>
        <div className={styles.active}>
          <div className={styles.titleBox}>
            <span>제목</span>
            <input
              placeholder="제목을 입력해주세요."
              className={styles.titleInput}
              name="title"
              value={modify?.title}
              onChange={handleChange}
            />
            <span>작성자</span>
            <input
              value={modify?.nickname}
              name="nickname"
              className={styles.writerAndDateInput}
              readOnly={true}
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              value={modify?.content}
              name="content"
              className={styles.contentInput}
              onChange={handleChange}
            />
          </div>

          <div className={styles.btnBox}>
            <button className={styles.modifyBtn}>
              <span className={styles.modifyText} onClick={modifyBtn}>
                수정하기
              </span>
            </button>
            <button className={styles.cancelBtn}>
              <span
                className={styles.cancelText}
                onClick={() => {
                  navigate("/board_read");
                }}
              >
                뒤로가기
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardModify;
