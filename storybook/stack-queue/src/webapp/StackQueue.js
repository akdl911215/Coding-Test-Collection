import React, { useState } from "react";

const StackQueue = () => {
  const [nodeArr, setNodeArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [stackAndQueue, setstackAndQueue] = useState("stack");
  const [floatValue, setFloatValue] = useState(false);
  console.log(stackAndQueue);

  const style = {
    arrBox: {
      height: "2rem",
      width: "8rem",
      display: "block",
      background: "green",
      textAlign: "center",
      float: floatValue ? "left" : "",
    },
  };

  const valueChoice = (e) => {
    if (e.target.value === "stack") {
      setstackAndQueue("stack");
      setFloatValue(false);
      reverseNodeArr(nodeArr, index);
    }

    if (e.target.value === "queue") {
      setstackAndQueue("queue");
      setFloatValue(true);
      sortNodeArr(nodeArr, index);
    }
  };

  const nodeAdd = () => {
    nodeArr[index] = index;
    console.log(nodeArr);
    if (stackAndQueue === "stack") {
      reverseNodeArr(nodeArr, index);
    }
    if (stackAndQueue === "queue") {
      sortNodeArr(nodeArr, index);
    }
    setIndex(index + 1);
  };

  const nodeDelete = () => {
    if (stackAndQueue === "stack") {
      nodeArr.shift();
      setNodeArr(nodeArr);
      setIndex(index - 1);
    }
    if (stackAndQueue === "queue") {
      nodeArr.pop();
      setNodeArr(nodeArr);
      setIndex(index - 1);
    }
  };

  const reverseNodeArr = (arr, index) => {
    let sortArr = [];
    let tmp = 0;

    if (index > 0) {
      sortArr = arr;
      for (let i = 0; i < index + 1; i++) {
        for (let j = 0; j < index - i; j++) {
          if (sortArr[j] < sortArr[j + 1]) {
            tmp = sortArr[j];
            sortArr[j] = sortArr[j + 1];
            sortArr[j + 1] = tmp;
          }
        }
      }
    }
  };

  const sortNodeArr = (arr, index) => {
    let sortArr = [];
    let tmp = 0;

    if (index > 0) {
      sortArr = arr;
      for (let i = 0; i < index + 1; i++) {
        for (let j = 0; j < index - i; j++) {
          if (sortArr[j] > sortArr[j + 1]) {
            tmp = sortArr[j];
            sortArr[j] = sortArr[j + 1];
            sortArr[j + 1] = tmp;
          }
        }
      }
    }
  };

  return (
    <>
      <div>
        자료구조 선택
        <select name="dataStructure" onChange={valueChoice}>
          <option value="stack" defaultValue>
            stack
          </option>
          <option value="queue">queue</option>
        </select>
      </div>
      <div>
        {nodeArr.length === 0 ? (
          <p>현재 노드가 존재하지 않습니다.</p>
        ) : (
          <>
            {nodeArr.map((element) => {
              return (
                <>
                  <div style={style.arrBox}>{element}</div>
                </>
              );
            })}
          </>
        )}
      </div>
      <br />
      <br />
      <div>
        <button onClick={nodeAdd}>노드 추가</button>
        <button onClick={nodeDelete}>노드 제거</button>
      </div>
    </>
  );
};

export default StackQueue;
