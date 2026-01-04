const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const indegrees = new Array(n + 1).fill(0);
const adjGraph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adjGraph[a].push(b);
  indegrees[b] += 1;
}

const stack = [];

for (let i = 1; i <= n; i++) {
  if (indegrees[i] === 0) stack.push(i);
}

const result = [];

while (stack.length > 0) {
  const cur = stack.pop();
  result.push(cur);
  for (const adj of adjGraph[cur]) {
    indegrees[adj] -= 1;
    if (indegrees[adj] === 0) stack.push(adj);
  }
}

console.log(result.join(" "));
