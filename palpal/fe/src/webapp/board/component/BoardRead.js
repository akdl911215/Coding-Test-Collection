import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardDeleteDataAPI, BoardIdReadDataAPI } from "../../api/boardApi";
import styles from "../style/BoardRead.module.css";
import { Button } from "semantic-ui-react";

const BoardRead = () => {
  const navigate = useNavigate(0);

  const [boardState, setBoardState] = useState({
    content: {},
  });
  let deleteBtnBool = false;
  if (sessionStorage.getItem("nickname") === boardState?.content?.nickname) {
    deleteBtnBool = true;
  }
  useEffect(() => {
    BoardIdReadDataAPI({
      boardId: Number(sessionStorage.getItem("boardId")),
    })
      .then((res) => {
        setBoardState({
          content: res?.data?.success[0],
        });
      })
      .catch((err) => console.error("investing read board id error : ", err));
  }, []);

  const boardRemove = () => {
    const remove = window.confirm("글을 삭제하시겠습니까?");

    if (remove) {
      BoardDeleteDataAPI({
        boardId: Number(sessionStorage.getItem("boardId")),
      })
        .then((res) => {
          console.log("res : ", res);
          if (res?.data?.code === 200) {
            alert("해당 게시글을 삭제하였습니다.");
            sessionStorage.removeItem("boardId");
            navigate("/board_list");
          } else {
            alert("해당 게시글 삭제를 실패하였습니다.");
          }
        })
        .catch((err) => console.error("investing board delete error : ", err));
    }
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
              value={boardState?.content?.title}
              readOnly={true}
            />
            <span>작성자</span>
            <input
              value={boardState?.content?.nickname}
              className={styles.writerAndDateInput}
              readOnly={true}
            />
          </div>
          <div className={styles.contentBox}>
            <span>본문</span>
            <textarea
              readOnly={true}
              value={boardState?.content?.content}
              className={styles.contentInput}
            />
          </div>

          <div className={styles.btnBox}>
            {sessionStorage.getItem("nickname") ===
            boardState?.content?.nickname ? (
              <button className={styles.modifyBtn}>
                <span
                  className={styles.modifyText}
                  onClick={() => {
                    navigate("/board_modify");
                  }}
                >
                  수정하기
                </span>
              </button>
            ) : null}
            <button className={styles.cancelBtn}>
              <span
                className={styles.cancelText}
                onClick={() => {
                  navigate("/board_list");
                }}
              >
                뒤로가기
              </span>
            </button>
            {deleteBtnBool === true ? (
              <Button onClick={boardRemove}>글 삭제</Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardRead;
