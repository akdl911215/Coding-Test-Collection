import React, { useEffect, useState } from "react";
import { Button, Input, Checkbox } from "semantic-ui-react";

const Board = () => {
  const [content, setContent] = useState("");
  const [contentArr, setContentArr] = useState([]);
  console.log("contentArr : ", contentArr);
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const addValue = () => {
    setContentArr((contentArr) => [...contentArr, content]);
    setContent("");
  };

  const [word, setWord] = useState("");
  const wordHandleChange = (e) => {
    setWord(e.target.value);
  };
  console.log("word : ", word);
  return (
    <>
      <Input
        type="text"
        name="keyword"
        onChange={wordHandleChange}
        placeholder="검색 키워드를 입력하세요."
      />
      <hr />
      <b>일정 목록</b> 완료 목록만 보기 <Checkbox radio />
      {contentArr.length === 0 ? (
        <p>등록된 일정이 없습니다.</p>
      ) : (
        <div>
          {contentArr.map((element) => {
            return (
              <>
                <ul>
                  <Checkbox radio />
                  {element}
                  <Button>삭제</Button>
                </ul>
              </>
            );
          })}
        </div>
      )}
      <hr />
      <Input
        type="text"
        name="task"
        placeholder="테스크명을 입력하세요."
        onChange={handleChange}
      />
      <Button onClick={addValue}>추가</Button>
    </>
  );
};

export default Board;
