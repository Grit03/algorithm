// 각 큐의 원소의 합이 같도록
// 필요한 작업의 최소 횟수
// 한번의 pop, insert가 작업 1회
// 큐는 선입선출
function solution(queue1, queue2) {
    const max = queue1.length + queue2.length;
    // 각 큐의 원소의 합을 같게 만들 수 없는 예외 케이스
    const firstQ1sum = queue1.reduce((sum, cur) => BigInt(sum) + BigInt(cur), BigInt(0));
    const firstQ2sum = queue2.reduce((sum, cur) => BigInt(sum) + BigInt(cur), BigInt(0));
    let sum = [firstQ1sum, firstQ2sum];
    let prevSum;
    
    let count = 0;
    let q1extend = [...queue1, ...queue2];
    let q2extend = [...queue2, ...queue1];
    let q1cur = 0;
    let q2cur = 0;
    let q1length = queue1.length;
    let q2length = queue2.length;
    while(true){
        const [q1Sum, q2Sum] = sum;
        if(q1Sum === q2Sum) return count;
        if(q1cur === max || q2cur === max) return -1;
        if(q1length === 0 || q2length === 0) return -1;
        if(q1Sum > q2Sum){
            const pop = BigInt(q1extend[q1cur % max]);
            q1cur++;
            q1length--;
            q2length++;
            prevSum = sum;
            sum = [q1Sum - pop, q2Sum + pop];
        }else{
            const pop = BigInt(q2extend[q2cur % max]);
            q2cur++;
            q2length--;
            q1length++;
            prevSum = sum;
            sum = [q1Sum + pop, q2Sum - pop];
        }
        count += 1;
    }
}
