function solution(N, stages) {
    
    // 스테이지(x)에 도달한 플레이어 수 = stages의 값이 x 이상인 플레이어의 수
    // 스테이지(x)에 도달했으나 클리어 못한 플레이어 수 = stage의 값이 x인 플레이어 수
  
    stages.sort((a, b) => a - b);
    let count = 0; // stage의 값이 x인 플레이어 수
    
    const failMap = new Map(Array.from({length: N}, (_, idx) => [idx+1, 0]));
    
    for(let i = 0; i < stages.length; i++){
        if(stages[i] > N) break;
        count += 1;
        if(stages[i] === stages[i+1]) continue;
        const playerSuccessed = (stages.length - 1) - (i - count);
        failMap.set(stages[i], count / playerSuccessed);
        count = 0;
    }
    
    console.log(failMap)
    
    // 실패율이 높은 것부터 정렬 (내림차순)
    // 실패율이 같을 때는 낮은 스테이지부터 정렬
    const answer = [...failMap.entries()].sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    }).map(([stage, _]) => stage);
    
    return answer;
    

}