import React, { useState } from "react";

const Sort3 = () => {
  let unsortedArray = [];

  const getPerformance = (func, params) => {
    let t0 = window.performance.now();
    func(params);
    let t1 = window.performance.now();
    return console.log(`${t1 - t0} ms.`);
  };

  const getRandomNumber = (n = 100) => {
    return Math.floor(Math.random() * n);
  };

  const getRandomArr = (n = 100) => {
    const temp = [];

    for (let i = 0; i < n; i++) {
      temp.push(getRandomNumber(n));
    }

    unsortedArray = temp;
    return mergeSort(temp);
  };

  const merge = (left, right) => {
    const result = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] <= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  const mergeSort = (array) => {
    if (array.length === 1) {
      return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);

    return merge(mergeSort(left), mergeSort(right));
  };

  const sortArr = getRandomArr(100000);
  console.log("unSortArr : ", unsortedArray);
  console.log("sortArr : ", sortArr);
  getPerformance(mergeSort, unsortedArray);

  return <div>sort</div>;
};

export default Sort3;
