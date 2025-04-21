let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let data = [0, ...input[1].split(" ").map(Number)];

let sum = 0;
let start = 1;
let end = x;
for (let i = start; i <= end; i++) {
  sum += data[i];
}

let maxSum = sum;
let count = 1; // 🔧 초기 윈도우 카운트 세는 것 누락했었음

while (true) {
  start += 1;
  end += 1;
  if (end > n) break;
  sum = sum - data[start - 1] + data[end];
  if (sum > maxSum) {
    maxSum = sum;
    count = 1;
  } else if (sum === maxSum) {
    count += 1;
  }
}

if (maxSum === 0) console.log("SAD");
else {
  console.log(maxSum);
  console.log(count);
}
