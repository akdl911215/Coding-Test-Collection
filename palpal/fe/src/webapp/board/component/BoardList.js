import React from "react";
import styles from "../style/BoardList.module.css";
import { useNavigate } from "react-router";

const BoardList = () => {
  const navigate = useNavigate();
  const arr = [
    {
      id: "1",
      title: "하하하",
      writer: "어드민이다",
    },
  ];
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
                  {/* {totalList?.map((el) => ( */}
                  {arr?.map((el) => (
                    <tr key={el.id}>
                      {/* onClick={() => movePage(el.id)} */}
                      <td>{el.id}</td>
                      <td>{el.title}</td>
                      {/* <td onClick={() => movePage(el.id)}>{el.writer}</td> */}
                      <td>{el.writer}</td>
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
                    onClick={() => navigate("/investing_infomation_register")}
                  >
                    글쓰기
                  </span>
                </button>
              )}
            </div>
          </div>
          {/* <div className={styles.paginationStyle}>
            <ShowPageNation
              name="investingBoardPageList"
              totalPages={pageList}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default BoardList;
