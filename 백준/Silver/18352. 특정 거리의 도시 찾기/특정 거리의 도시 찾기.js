let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 도시 개수 N, 도로 개수 M, 거리 정보 K, 출발 도시 번호 X
const [n, m, k, x] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [node1, node2] = input[i].split(" ").map(Number);
  graph[node1].push(node2);
}

const answer = [];

const queue = [];
let head = 0;
const visited = new Set();
queue.push([x, 0]);
visited.add(x);

while (head < queue.length) {
  const [index, dist] = queue[head++];
  if (dist === k) {
    answer.push(index);
  }
  for (let next of graph[index]) {
    if (visited.has(next)) continue;
    queue.push([next, dist + 1]);
    visited.add(next);
  }
}

if (answer.length === 0) console.log(-1);
else console.log(answer.sort((a, b) => a - b).join("\n"));
