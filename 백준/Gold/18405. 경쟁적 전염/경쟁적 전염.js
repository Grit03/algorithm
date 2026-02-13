let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 확인해야할 좌표
const [n, k] = input[0].split(" ").map(Number);
const graph = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const [s, x, y] = input[input.length - 1].split(" ").map(Number);

const queue = [];
let head = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] > 0) queue.push([i, j, graph[i][j], 0]); // 바이러스 넣기 (좌표 x, 좌표 y, 바이러스 종류, 시간)
  }
}

queue.sort((a, b) => a[2] - b[2]);

while (head < queue.length) {
  const [row, col, virus, time] = queue[head++];
  if (time === s) {
    break;
  }
  for (const [nextRow, nextCol] of [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ]) {
    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n) continue;
    if (graph[nextRow][nextCol] !== 0) continue;
    queue.push([nextRow, nextCol, virus, time + 1]);
    graph[nextRow][nextCol] = virus; // 바이러스 표시 겸 방문 처리
  }
}
console.log(graph[x - 1][y - 1]);
