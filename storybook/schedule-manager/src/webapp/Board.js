import React, { useState } from "react";
import { Button, Input, Checkbox } from "semantic-ui-react";

const Board = () => {
  const [inputText, setInputText] = useState({
    content: "",
    keyword: "",
  });
  const { content, keyword } = inputText;

  const handleInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const deleteArr = (index) => {
    console.log("deleteArr index : ", index);
    contentArr.splice(index, 1);
    setContentArr((contentArr) => [...contentArr]);
  };

  const [contentArr, setContentArr] = useState([]);
  const [contentArr2, setContentArr2] = useState([
    {
      id: 0,
      content: "",
      boolValue: false,
    },
  ]);
  const addValue = (e) => {
    setContentArr((contentArr) => [...contentArr, content]);
    setInputText({ ...inputText, [e.target.name]: "" });
  };

  const [completion, setCompletion] = useState(false);
  const completionCheck = () => {
    setCompletion(!completion);
  };

  const [schedule, setSchedule] = useState(false);
  const scheduleCheck = ({ target }) => {
    console.log("target : ", target);
    console.log("!schedule : ", !schedule);
    setSchedule(!schedule);
  };

  console.log("contentArr : ", contentArr);
  return (
    <>
      <Input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleInput}
        placeholder="검색 키워드를 입력하세요."
      />
      <hr />
      <div>
        <b>일정 목록</b> 완료 목록만 보기
        <Checkbox onChange={completionCheck} />
      </div>
      {completion ? (
        <>
          <h1>완료 목록</h1>
          {contentArr.length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element;
                  } else if (element.includes(keyword)) {
                    return element;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      <ul>
                        <Checkbox
                          checked={schedule}
                          onChange={(e) => scheduleCheck(e)}
                        />
                        {element},{index}
                        <Button onClick={() => deleteArr(index)}>삭제</Button>
                      </ul>
                    </>
                  );
                })}
            </>
          )}
        </>
      ) : (
        <>
          <h1>미완료 목록</h1>
          {contentArr.length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element;
                  } else if (element.includes(keyword)) {
                    return element;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      <ul>
                        <Checkbox onChange={scheduleCheck} />
                        {element},{index}
                        <Button onClick={() => deleteArr(index)}>삭제</Button>
                      </ul>
                    </>
                  );
                })}
            </>
          )}
        </>
      )}
      <hr />
      <Input
        type="text"
        name="content"
        value={content}
        placeholder="테스크명을 입력하세요."
        onChange={handleInput}
      />
      <Button name="content" onClick={addValue}>
        추가
      </Button>
    </>
  );
};

export default Board;
