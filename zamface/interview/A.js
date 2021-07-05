// m x n 격자 생성
// m 랜덤 수  n 랜덤수 2~10000


let m = Math.floor(Math.random() * 9999) + 2;
let n = Math.floor(Math.random() * 9999) + 2;
const arr = Array.from(Array(m), () => Array(n).fill(null));
console.log(arr);
