import React, { useEffect, useState } from "react";

const Sort = () => {
  let N = 0;
  let arr = new Array(N);
  console.log("arr.legnth : ", arr.legnth);
  // let randomArr = [];
  // console.log("randomArr : ", randomArr);
  const [randomArr, setRandomArr] = useState([]);
  const [resultArr, setResultArr] = useState([]);

  function merge(randomArr, m, middle, n) {
    console.log("도착?");
    console.log("merge randomArr : ", randomArr);

    let i = m;
    let j = middle + 1;
    let k = m;
    let sorted = [];
    console.log("i ", i);
    console.log("j ", j);
    console.log("k ", k);
    console.log("sorted", sorted);

    while (i <= middle && j <= n) {
      if (randomArr[i] <= randomArr[j]) {
        sorted[k] = randomArr[i];
        i++;
      } else {
        sorted[k] = randomArr[j];
        j++;
      }

      k++;
      console.log("sorted !!! ", sorted);
    }

    if (i > middle) {
      for (let z = j; z <= n; z++) {
        sorted[k] = randomArr[z];
        k++;
      }
    } else {
      for (let z = i; z <= middle; z++) {
        sorted[k] = randomArr[z];
        k++;
      }
    }

    console.log("sorted :: ", sorted);
    setResultArr(sorted);
    console.log("resultArr : ", resultArr);

    // for (let z = i; z <= N; z++) {
    //   randomArr[z] = sorted[z];
    //   console.log("randomArr[z] : ", randomArr[z]);
    // }
    // for (let z = m; z <= N; z++) {
    //   console.log(arr[z], " ");
    // }
  }

  function mergeSort(randomArr, m, n) {
    const M = parseInt(m);
    const N = parseInt(n);
    if (M < N) {
      console.log("m < n 작을 경우");
      const middle = parseInt((M + N) / 2);
      mergeSort(randomArr, M, middle);
      mergeSort(randomArr, middle + 1, N);
      console.log("merge 함수 시작");
      merge(randomArr, M, middle, N);
    }

    return;
  }
  const getRandomNumber = (n = 100) => {
    return Math.floor(Math.random() * n + 1);
  };

  const getRandomArr = (n = 100) => {
    N = n;
    // arr[N];

    console.log("N : ", N);

    const temp = [];

    for (let i = 0; i < n; i++) {
      temp.push(getRandomNumber(n));
    }

    // const arr = temp.map((element) => {
    //   return element;
    // });
    console.log("temp : ", temp);
    // console.log("map 후 arr : ", randomArr);
    // setRandomArr(arr)
    setRandomArr(temp);
    mergeSort(temp, 0, N - 1);

    return temp;
  };

  // 퍼포먼스 확인
  const getPerformance = (func, params) => {
    console.log("func : ", func);
    console.log("params : ", params);
    // if (typeof window !== "undefined") {
    let t0 = window.performance.now();
    func(params, 0, N - 1);
    let t1 = window.performance.now();
    return `${t1 - t0} ms.`;
    // }

    // func(params, 0, N - 1);

    // return console.log("window 없음");
  };

  getRandomArr(5);
  console.log("randomArr : ", randomArr);
  // getPerformance(mergeSort, randomArr);
  // getPerformance(mergeSort(), getRandomArr(5));

  return <div>Sort</div>;
};

export default Sort;
