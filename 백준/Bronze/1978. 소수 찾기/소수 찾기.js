const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let answer = 0;

for (const num of numbers) {
  if (num === 1) continue;
  let flag = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  if (flag) answer += 1;
}

console.log(answer);
