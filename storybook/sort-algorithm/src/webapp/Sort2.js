import React, { useState } from "react";

const Sort2 = () => {
  const [resultArr, setResultArr] = useState([]);
  // const [arr, setArr] = useState([]);

  const getRandomNumber = (n = 100) => {
    return Math.floor(Math.random() * n);
  };

  const getRandomArr = (n = 100) => {
    const temp = [];

    for (let i = 0; i < n; i++) {
      temp.push(getRandomNumber(n));
    }

    console.log("temp : ", temp);
    mergeSort(temp, 0, n - 1);
    return temp;
  };

  function mergeSort(temp, m, n) {
    console.log("mergeSort temp : ", temp);
    const intM = parseInt(m);
    const intN = parseInt(n);
    console.log("mergeSort intM : ", intM);
    console.log("mergeSort intN : ", intN);

    if (intM < intN) {
      console.log("if진입 intM < intN", intM < intN);
      const middle = (intM + intN) / 2;
      mergeSort(temp, intM, middle);
      mergeSort(temp, middle + 1, intN);
      merge(temp, m, middle, n);
    }
  }

  function merge(temp, m, middle, n) {
    console.log("merge 시작");
    let intI = parseInt(m);
    let intJ = parseInt(middle + 1);
    const intMiddle = parseInt(middle);
    let intK = parseInt(m);
    const intN = parseInt(n);
    const intM = parseInt(m);
    let sorted = [];
    let arr = [];
    let tempFrontArr = [];
    let tempBackArr = [];

    while (intI <= intMiddle && intJ <= intN) {
      console.log("temp[intI] : ", temp[intI]);
      console.log("temp[intJ] : ", temp[intJ]);

      for (let i = intI; i < intMiddle; i++) {
        tempFrontArr.push(temp[i]);
      }
      for (let i = intJ; i < intN; i++) {
        tempBackArr.push(temp[i]);
      }

      if (temp[intI] <= temp[intJ]) {
        // let num = temp[intI];
        // console.log("🚀 >> num", num);
        sorted.push(tempFrontArr.shift());
        intI++;
      } else {
        // let num = temp[intJ];
        sorted.push(tempBackArr.shift());
        intJ++;
      }
      console.log("while sorted ::: ", sorted);
      intK++; // 없어도 될듯?
    }

    if (intI > intMiddle) {
      for (let z = intJ; z <= intN; z++) {
        sorted.push(tempBackArr.shift());
        intK++;
      }
    } else {
      for (let z = intI; z <= intMiddle; z++) {
        sorted.push(tempFrontArr.shift());
        intK++;
      }
    }

    for (let z = intM; z <= intN; z++) {
      arr.push(sorted.shift());
    }

    console.log("arr : ", arr);
    setResultArr(arr);
  }
  // console.log("resultArr : ", resultArr);

  getRandomArr(5);

  const getPerformance = (func, params) => {
    let t0 = window.performance.now();
    func(params);
    let t1 = window.performance.now();
    return `${t1 - t0} ms.`;
  };

  // getPerformance(sortFunc, unsortedArr);
  return <div>Sort</div>;
};

export default Sort2;
