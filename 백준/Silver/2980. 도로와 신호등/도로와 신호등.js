const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number); //신호등의 개수 N과 도로의 길이 L

let time = 0;
let road = 0;

for (let i = 1; i <= n; i++) {
  const [d, r, g] = input[i].split(" ").map(Number);
  time += d - road;
  road = d;
  while (time % (r + g) < r) {
    time += 1;
  }
}

// 마지막 신호등에서 남은 길이
time += l - road;

console.log(time);
