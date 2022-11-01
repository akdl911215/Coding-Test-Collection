import React, { useEffect, useState } from "react";
import styles from "../style/BoardList.module.css";
import { useNavigate } from "react-router";
import { UserAuthDataAPI } from "../../api/userApi";
import { BoardPagenationListDataAPI } from "../../api/boardApi";
import { Pagination } from "semantic-ui-react";

const BoardList = () => {
  const navigate = useNavigate();

  const [listArr, setListArr] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          sessionStorage.setItem("currentPage", 1);
          BoardPagenationListDataAPI(1)
            .then((res) => {
              console.log("res : ", res);
              setListArr(res?.data?.list);
              setTotalPages(res?.data?.pagenationCount);
            })
            .catch((err) =>
              console.error("board pagenation list error : ", err)
            );
        } else {
          const result = window.confirm(
            "로그인이 필요한 기능입니다. 로그인을 진행하시겠습니까?"
          );

          if (result) {
            navigate("/users_signin");
            sessionStorage.setItem("signinPage", "/board_list");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => console.error(`board list token check error : ${err}`));
  }, []);

  const handleChange = (e) => {
    const boolNum = e.target.text;

    let num = 0;
    if (boolNum < "1") {
      num = 1;
    } else if (boolNum === "⟩") {
      num = Number(sessionStorage.getItem("currentPage")) + 1;
    } else if (boolNum === "⟨") {
      num = Number(sessionStorage.getItem("currentPage")) - 1;
    } else {
      num = Number(e.target.text);
    }

    sessionStorage.setItem("currentPage", num);
    BoardPagenationListDataAPI(num)
      .then((res) => {
        setListArr(res?.data?.list);
        setTotalPages(res?.data?.pagenationCount);
      })
      .catch((err) => console.error("board pagenation list error : ", err));
  };

  const movePage = (id) => {
    sessionStorage.setItem("boardId", id);
    navigate("/board_read");
  };

  return (
    <>
      <div className={styles.list}>
        <div className={styles.active}>
          <div className={styles.contents}>
            <div className={styles.tableBox}>
              <table className={styles.table}>
                <colgroup>
                  <col width="20%" />
                  <col width="50%" />
                  <col width="*" />
                  <col width="*" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th>게시물 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {listArr?.map((el) => (
                    <tr key={el.id}>
                      {/* onClick={() => movePage(el.id)} */}
                      <td onClick={() => movePage(el.id)}>{el.id}</td>
                      <td onClick={() => movePage(el.id)}>{el.title}</td>
                      <td onClick={() => movePage(el.id)}>{el.nickname}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.btnStyle}>
            {/* <GoHomeButton /> */}
            <div className={styles.writeBtn}>
              {sessionStorage.getItem("email") === null ? null : (
                <button className={styles.contentRegisterBtn}>
                  <span
                    className={styles.contentRegisterText}
                    onClick={() => navigate("/board_register")}
                  >
                    글쓰기
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className={styles.paginationStyle}>
            <Pagination
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={totalPages}
              onClick={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardList;
