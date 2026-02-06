let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const hpArr = input[1].split("");
const ate = Array.from({ length: hpArr.length }, () => false);

let count = 0;

for (let i = 0; i < hpArr.length; i++) {
  if (hpArr[i] === "P") {
    for (let j = i - k; j <= i + k; j++) {
      if (j < 0 || j >= hpArr.length) continue;
      if (hpArr[j] === "H" && !ate[j]) {
        ate[j] = true;
        count++;
        break;
      }
    }
  }
}

console.log(count);
