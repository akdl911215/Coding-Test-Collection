// arr[5][2] (빈 배열 생성)
const arr1 = Array.from(Array(5), () => new Array(2));
console.log(arr1);

// arr[5][2] (null로 초기화하여 생성) 5=열 , 2=행
const arr2 = Array.from(Array(5), () => Array(2).fill(null));
console.log(arr2);
