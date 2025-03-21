class Queue {
    constructor(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue(){
        let item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

function turn(direction){
    console.log("direction", (direction + 1) % 4);
    return (direction + 1) % 4;
}

function solution(n) {
    let answer = Array.from({length: n}, () => new Array(n).fill(0));
    
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    
    let direction = 0;
    let queue = new Queue();
    let num = 1;
    
    queue.enqueue([0, 0]);
    
    
    while(queue.getLength() !==0){
        let [x, y] = queue.dequeue();
        answer[x][y] = num;
        
        // 1인 케이스 예외 처리
        if(n === 1){
            break;
        }
        
        let nx = x + dx[direction];
        let ny = y + dy[direction];
        
        // 판을 넘어가면 방향 돌리기
        if(nx === n || ny === n || nx < 0 || ny <0){
            direction = turn(direction);
            nx = x + dx[direction];
            ny = y + dy[direction];
        }
        
        // 방문했으면 방향 돌리기
        if(answer[nx][ny] !== 0){
            direction = turn(direction);
            nx = x + dx[direction];
            ny = y + dy[direction];
        }
        
        // 방문 안한게 있을 때만 넣기
        if(answer[nx][ny] === 0){
            queue.enqueue([nx, ny]);
        }
        
        num++;
    }

    return answer;
}