import React, { useRef, useState } from "react";
import { Button, Input } from "semantic-ui-react";

const Board = () => {
  const [completion, setCompletion] = useState(false);
  const [inputText, setInputText] = useState({
    content: "",
    keyword: "",
  });
  const { content, keyword } = inputText;

  const handleInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const [contentArr, setContentArr] = useState([]);
  const [check, setCheck] = useState(false);
  const arrId = useRef(0);
  const addValue = (e) => {
    const contentState = {
      id: arrId.current,
      value: content,
      done: false,
    };
    setContentArr([...contentArr, contentState]);
    setInputText({ ...inputText, [e.target.name]: "" });
    arrId.current += 1;
  };

  const deleteArr = (index) => {
    contentArr.splice(index, 1);
    setContentArr((contentArr) => [...contentArr]);
  };

  const checkBox = (e, index) => {
    const contentState = {
      id: index,
      value: contentArr[index].value,
      done: e.target.checked === true ? true : false,
    };

    contentArr.splice(index, 1, contentState);
    setCheck(!check);
  };

  return (
    <>
      <Input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleInput}
        placeholder="검색 키워드를 입력하세요."
      />
      <hr align="left" width="25%" />
      <div>
        <b>일정 목록</b> ㅤㅤㅤㅤ완료 목록만 보기
        <input type="checkbox" onChange={() => setCompletion(!completion)} />
      </div>
      {completion ? (
        <>
          {contentArr.filter((element) => element.value).length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element.value;
                  } else if (element.value.includes(keyword)) {
                    return element.value;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      {element.done ? (
                        <ul>
                          <input
                            type="checkbox"
                            checked="true"
                            onChange={(e) => checkBox(e, index)}
                          />

                          {element.value}
                          <Button onClick={() => deleteArr(index)}>삭제</Button>
                        </ul>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
            </>
          )}
        </>
      ) : (
        <>
          {contentArr.filter((element) => element.value).length === 0 ? (
            <p>등록된 일정이 없습니다.</p>
          ) : (
            <>
              {contentArr
                .filter((element) => {
                  if (keyword === "") {
                    return element.value;
                  } else if (element.value.includes(keyword)) {
                    return element.value;
                  }
                })
                .map((element, index) => {
                  return (
                    <>
                      {element.done ? (
                        ""
                      ) : (
                        <ul>
                          <input
                            type="checkbox"
                            onChange={(e) => checkBox(e, index)}
                          />

                          {element.value}
                          <Button onClick={() => deleteArr(index)}>삭제</Button>
                        </ul>
                      )}
                    </>
                  );
                })}
            </>
          )}
        </>
      )}
      <hr align="left" width="25%" />
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
