function solution(food_times, k) {
    let cursor = 0;
    const total_foods = food_times.length;
    const sorted_food_times = food_times.map((v, idx) => [v, idx+1]).sort((a, b) => a[0] - b[0]); // 먹는데 필요한 시간, 음식 번호
    
    let prevTime = 0;
    for(let i=0; i < sorted_food_times.length; i++){
        const rowClearTime = (total_foods - i) * (sorted_food_times[i][0] - prevTime); // 현존 음식 개수 * 소요 시간
        if(k < rowClearTime){
            const left = sorted_food_times.slice(i).sort((a, b) => a[1] - b[1]);
            const index = k % (total_foods - i);
            return left[index][1];
        }
        k -= rowClearTime;
        prevTime = sorted_food_times[i][0];
    }
    return -1;
    
}