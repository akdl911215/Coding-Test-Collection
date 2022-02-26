import React, { useEffect, useState } from "react";

const StackQueue = () => {
  const [nodeArr, setNodeArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [stackAndQueue, setstackAndQueue] = useState("stack");
  const [floatValue, setFloatValue] = useState("undefined");
  // const [style, setStyle] = useState({});
  console.log(stackAndQueue);
  console.log("floatValue : ", floatValue);

  const style = {
    arrBox: {
      height: "2rem",
      width: "8rem",
      display: "block",
      background: "green",
      textAlign: "center",
      float: floatValue,
    },
  };

  const valueChoice = (e) => {
    console.log("e.target.value : ", e.target.value);
    if (e.target.value === "stack") {
      setstackAndQueue("stack");
      setFloatValue("undefined");
    }

    if (e.target.value === "queue") {
      setstackAndQueue("queue");
      setFloatValue("left");
    }
  };

  const nodeAdd = () => {
    console.log("nodeArr : ", nodeArr);
    console.log("stackAndQueue : ", stackAndQueue);
    nodeArr[index] = index;
    if (stackAndQueue === "stack") {
      console.log("nodeArr[index]  : ", nodeArr[index]);
      reverseNodeArr(nodeArr, index);
      setIndex(index + 1);
    }

    if (stackAndQueue === "queue") {
      // nodeArr[index] = index;
      sortNodeArr(nodeArr, index);
      setIndex(index + 1);
    }
  };

  const nodeDelete = () => {
    // if (stackAndQueue === "stack") {
    nodeArr.splice(0, 1);
    setNodeArr(nodeArr);
    setIndex(index - 1);
    // }
  };

  const reverseNodeArr = (arr, index) => {
    console.log("index : ", index);
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

    setNodeArr(sortArr);
  };

  const sortNodeArr = (arr, index) => {
    console.log("index : ", index);
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

    setNodeArr(sortArr);
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

      <div>{nodeArr} 노드배열 </div>
      {nodeArr.length === 0 ? (
        <p>현재 노드가 존재하지 않습니다.</p>
      ) : (
        <>
          {nodeArr.map((element, index) => {
            return (
              <>
                <div style={style.arrBox}>{element}</div>
              </>
            );
          })}
        </>
      )}

      <button onClick={nodeAdd}>노드 추가</button>
      <button onClick={nodeDelete}>노드 제거</button>
    </>
  );
};

export default StackQueue;
