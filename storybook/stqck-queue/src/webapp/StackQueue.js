import React, { useEffect, useState } from "react";

const StackQueue = () => {
  const [nodeArr, setNodeArr] = useState([]);
  const [index, setIndex] = useState(0);

  const nodeAdd = () => {
    nodeArr[index] = index;
    reverseNodeArr(nodeArr, index);
    setIndex(index + 1);
    //

    return;
  };
  console.log("nodeArr : ", nodeArr);
  console.log(index);

  const reverseNodeArr = (arr, index) => {
    console.log("arr : ", arr);
    console.log("index : ", index);
    let sortArr = [];
    let tmp = 0;

    if (index > 0) {
      console.log("if 시작");

      sortArr = arr;

      for (let i = 0; i < index + 1; i++) {
        for (let j = 0; j < index - i; j++) {
          if (sortArr[j] < sortArr[j + 1]) {
            console.log("sortArr[j] : ", sortArr[j]);
            console.log("sortArr[j + 1] : ", sortArr[j + 1]);
            tmp = sortArr[j];
            sortArr[j] = sortArr[j + 1];
            sortArr[j + 1] = tmp;
          }
        }
      }

      console.log("sortArr : ", sortArr);
    }

    // for (int i = 0; i < N; i++) sortArr[i] = Integer.parseInt(br.readLine());

    // for (int i = 0; i < N; i++) {
    //     for (int j = 0; j < N - (i + 1); j++) {
    //         if (sortArr[j] > sortArr[j + 1]) {
    //             tmp = sortArr[j];
    //             sortArr[j] = sortArr[j + 1];
    //             sortArr[j + 1] = tmp;
    //         }
    //     }
    // }
  };

  return (
    <>
      <div>
        자료구조 선택
        <select name="dataStructure">
          <option value="stack">stack</option>
          <option value="queue">queue</option>
        </select>
      </div>

      {nodeArr.length === 0 ? (
        <p>현재 노드가 존재하지 않습니다.</p>
      ) : (
        <>
          {nodeArr.map((element, index) => {
            return (
              <>
                <div
                  style={{
                    height: "2rem",
                    width: "10rem",
                    display: "block",
                    background: "green",
                  }}
                >
                  {nodeArr[index]}
                </div>
              </>
            );
          })}
        </>
      )}

      <button onClick={nodeAdd}>노드 추가</button>
      <button>노드 제거</button>
    </>
  );
};

export default StackQueue;
