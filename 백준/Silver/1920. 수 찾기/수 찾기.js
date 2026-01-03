const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[2]);
const aSet = new Set(input[1].split(" ").map(Number));

const numbers = input[3].split(" ").map(Number);

let answer = "";
for (const num of numbers) {
  if (aSet.has(num)) {
    answer += "1\n";
  } else {
    answer += "0\n";
  }
}

console.log(answer);
