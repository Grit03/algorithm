function solution(jobs) {
    var answer = 0;
    const 작업개수 = jobs.length;
    // 요청 시간 순서대로 정렬
    // 우선순위대로 튜플 바꾸기
    const jobsSorted = jobs.map(([reqTime, duration], i) => [duration, reqTime, i]).sort((a, b) => a[1] - b[1]); 
    
    const queue = [];
    let time = 0; // 시간
    let totalTurnaround = 0;
    let jobIndex = 0;
    let done = 0;
    let queueHead = 0;

    
    while(done < 작업개수){
        // 대기 큐에 넣기
        while(jobIndex < 작업개수 && jobsSorted[jobIndex][1] <= time){
            queue.push(jobsSorted[jobIndex]);
            jobIndex++;
        }
        
        // 정렬
        queue.sort((a, b) => {
            // 작업 시간
            if(a[0] !== b[0]) return a[0] - b[0];
            if(a[1] !== b[1]) return a[1] - b[1];
            if(a[2] !== b[2]) return a[2] - b[2];
        });
        
        
        
        if(queue.length > 0){
            // 작업 처리
            const [cDuration, cReqTime, cIndex] = queue.shift();


            time += cDuration; // 현재 시각
            totalTurnaround += time - cReqTime; // 현재 시각 - 요청 시각
            done += 1;
        }else{
            // 다음 작업 요청 시간으로 이동
            time = jobsSorted[jobIndex][1];
            continue;
        }
    }
    
    return Math.floor(totalTurnaround / done);
}