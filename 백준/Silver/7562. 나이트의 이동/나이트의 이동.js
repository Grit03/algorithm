let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const testcase = Number(input[0]);
const START_INDEX = 1;
const LINE_NUM = 3;

const move = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
];

const getNextNode = ([cr, cc, count]) =>
  move.map(([dr, dc]) => [dr + cr, dc + cc, count]);
const answer = [];

for (let i = 0; i < testcase; i++) {
  const queue = [];
  let head = 0;

  const l = Number(input[START_INDEX + LINE_NUM * i]); // 체스 한판의 길이
  const [row, col] = input[START_INDEX + (LINE_NUM * i + 1)]
    .split(" ")
    .map(Number); // 말 위치
  const [rowD, colD] = input[START_INDEX + (LINE_NUM * i + 2)]
    .split(" ")
    .map(Number); // 도착 위치
  const visited = Array.from({ length: l }, () => new Array(l).fill(false));

  queue.push([row, col, 0]);
  visited[row][col] = true;

  while (head < queue.length) {
    const [curRow, curCol, count] = queue[head++];
    if (rowD === curRow && colD === curCol) {
      answer.push(count);
      break;
    }
    const nextNodes = getNextNode([curRow, curCol, count]);
    for (const [nextRow, nextCol, count] of nextNodes) {
      if (nextRow < 0 || nextRow >= l || nextCol < 0 || nextCol >= l) continue;
      if (visited[nextRow][nextCol]) continue;
      queue.push([nextRow, nextCol, count + 1]);
      visited[nextRow][nextCol] = true;
    }
  }
}

console.log(answer.join("\n"));
