let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 수빈 위치 n, 동생 위치 k
const [n, k] = input[0].split(" ").map(Number);
const visited = new Set();

const queue = [];
queue.push([n, 0]);
visited.add(n);
let head = 0;

function getNextNode(node) {
  return [node + 1, node - 1, node * 2];
}

let answer = 0;

while (head < queue.length) {
  const [node, time] = queue[head++];
  if (node === k) {
    answer = time;
    break;
  }
  const nextNodes = getNextNode(node);
  for (let nextnode of nextNodes) {
    if (nextnode < 0 || nextnode > 100000 || visited.has(nextnode)) continue;
    queue.push([nextnode, time + 1]);
    visited.add(nextnode);
  }
}

console.log(answer);
