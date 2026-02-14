let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 역의 수 N과 한 하이퍼튜브가 서로 연결하는 역의 개수 K, 하이퍼튜브의 개수 M
let [n, k, m] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n + m + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  let v = input[i].split(" ").map(Number);

  for (let j = 0; j < k; j++) {
    graph[v[j]].push(n + i);
    graph[n + i].push(v[j]);
  }
}

let visited = new Array(n + m + 1).fill(0);
let queue = new Queue();
queue.enqueue(1);
visited[1] = 1;
let check = false;
let ans = 0;

while (queue.getLength() !== 0) {
  let v = queue.dequeue();
  if (v === n) {
    check = true;
    ans = visited[v];
    break;
  }
  for (let nv of graph[v]) {
    if (visited[nv] === 0) {
      queue.enqueue(nv);
      visited[nv] = visited[v] + 1;
    }
  }
}

if (check) console.log(parseInt(ans / 2) + 1);
else console.log(-1);
