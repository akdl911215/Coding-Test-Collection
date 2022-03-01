import React, { useState } from "react";
import { Button, Input, Checkbox } from "semantic-ui-react";

const Board = () => {
  const [inputText, setInputText] = useState({
    content: "",
    keyword: "",
  });
  const { content, keyword } = inputText;

  const [completion, setCompletion] = useState(false);
  const completionCheck = () => {
    setCompletion(!completion);
  };

  const handleInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const deleteArr = (index) => {
    console.log("deleteArr index : ", index);
    // notCompletedArr.splice(index, 1);
    setContentArr((contentArr) => [...contentArr]);
  };

  const addValue = (e) => {
    console.log("event : ", e);
    setContentArr((contentArr) => [...contentArr, content]);
    setInputText({ ...inputText, [e.target.name]: "" });
  };

  const [schedule, setSchedule] = useState(false);
  const [contentArr, setContentArr] = useState([]);
  const [completedArr, setCompletedArr] = useState([]);
  const [notCompletedArr, setNotCompletedArr] = useState([]);

  // const completedCheck = (index) => {
  //   console.log("index : ", index);
  //   // notCompletedArr.push(completedArr.slice(index, 1));
  //   setNotCompletedArr(completedArr.splice(index, 1));
  // };
  // const notCompletedCheck = (index) => {
  //   console.log(index);
  //   // completedArr.push(notCompletedArr.slice(index, 1));
  //   setCompletedArr(notCompletedArr.splice(index, 1));
  // };

  // const [checkbox, setCheckbox] = useState([]);
  let checkbox = [];
  const checkiBox = (e, index, element) => {
    // console.log("event : ", e.target.checked);
    console.log("event : ", e);
    console.log("index : ", index);
    console.log("element : ", element);
    for (let i = 0; i < contentArr.length; i++) {
      checkbox[i] = false;
    }
    for (let i = 0; i < contentArr.length; i++) {
      // checkbox[i] = false;

      if (e.target.checked === true) {
        checkbox[index] = e.target.checked;
      }

      if (e.target.checked === false) {
        checkbox[index] = false;
      }
    }

    console.log("checkbox : ", checkbox);
  };

  console.log("contentArr : ", contentArr);
  // console.log("completedArr : ", completedArr);
  // console.log("notCompletedArr : ", notCompletedArr);
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
                        <input
                          type="checkbox"
                          checked={schedule}
                          onChange={(e) => checkiBox(e, index)}
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
                      <ul key={index}>
                        <input
                          type="checkbox"
                          onChange={(e) => checkiBox(e, index, element)}
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
