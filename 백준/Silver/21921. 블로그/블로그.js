let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 지난 일수 N 중 X일 동안 최대 방문자 수
let [n, x] = input[0].split(" ").map(Number);
let visitorCounts = input[1].split(" ").map(Number);

let ans = [0];

let max = -1;
// 첫번째 기간 방문자 초기화
for (let i = 0; i < x; i++) {
  ans[0] += visitorCounts[i];
}
max = Math.max(max, ans[0]);

for (let i = 1; i < n - 1; i++) {
  let prev = i - 1;
  let next = i + (x - 1);
  if (next >= n) break;

  const value = ans[prev] - visitorCounts[prev] + visitorCounts[next];
  ans[i] = value;
  max = Math.max(max, ans[i]);
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(ans.filter((c) => c === max).length);
}
