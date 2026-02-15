let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 동기 수
const n = Number(input[0]);
// 리스트 길이
const m = Number(input[1]);

const freinds = input.slice(2).map((pair) => pair.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);

for (const [f1, f2] of freinds) {
  graph[f1].push(f2);
  graph[f2].push(f1);
}

const queue = [[1, 0]];
let head = 0;
const visited = new Set();
visited.add(1);

while (head < queue.length) {
  const [person, dist] = queue[head++];

  for (const fr of graph[person]) {
    if (visited.has(fr)) continue;
    if (dist + 1 > 2) continue;
    queue.push([fr, dist + 1]);
    visited.add(fr);
  }
}

console.log(visited.size - 1);
