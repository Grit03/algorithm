const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let number = Number(input[0]);

const list = [];

if (number === 1) return;

for (let i = 2; number !== 1; i++) {
  while (number % i === 0) {
    list.push(i);
    number /= i;
  }

  if (i * i >= number && number !== 1) {
    list.push(number);
    break;
  }
}

console.log(list.join("\n"));
