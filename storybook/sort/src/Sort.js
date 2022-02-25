let N = 0;
let arr = new Array();
let sorted = new Array();
let randomArr = new Array();

function merge(arr, m, middle, n) {
  let i = m;
  let j = middle + 1;
  let k = m;
  sorted[N];

  while (i <= middle && j <= n) {
    if (arr[i] <= arr[j]) {
      sorted[k] = arr[i];
      i++;
    } else {
      sorted[k] = arr[j];
      j++;
    }

    k++;
  }

  if (i > middle) {
    for (let z = j; z <= N; z++) {
      sorted[k] = arr[z];
      k++;
    }
  } else {
    for (let z = i; z <= middle; z++) {
      sorted[k] = arr[z];
      k++;
    }
  }

  for (let z = m; z <= N; z++) {
    arr[z] = sorted[z];
  }
  for (let z = m; z <= N; z++) {
    console.log(arr[z], " ");
  }
}

function mergeSort(arr, m, n) {
  console.log("arr : ", arr);
  if (m < n) {
    const middle = (m + n) / 2;
    mergeSort(arr, m, middle);
    mergeSort(arr, middle + 1, n);
    merge(arr, m, middle, n);
  }
}
const getRandomNumber = (n = 100) => {
  return Math.floor(Math.random() * n);
};

const getRandomArr = (n = 100) => {
  N = n;
  arr[N];
  console.log("N : ", N);
  const temp = [];

  for (let i = 0; i < n; i++) {
    temp.push(getRandomNumber(n));
  }

  // console.log("temp : ", temp);

  randomArr = temp.map((element) => {
    return element;
  });
  console.log("randomArr : ", randomArr);

  // mergeSort(arr, 0, N - 1);

  return randomArr;
};

// 퍼포먼스 확인
const getPerformance = (func, params) => {
  console.log("func : ", func);
  console.log("params : ", params);
  if (typeof window !== "undefined") {
    let t0 = window.performance.now();
    func(params, 0, N - 1);
    let t1 = window.performance.now();
    return `${t1 - t0} ms.`;
  }

  func(params, 0, N - 1);

  return console.log("window 없음");
};

getRandomArr(100000);
// sortFunc , unsortedArr
getPerformance(mergeSort, randomArr);
