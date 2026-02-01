function solution(fees, records) {
    // 출차가 없는 케이스를 디폴트로!!
    const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
    const DAY_TIME = 23 * 60 + 59;
    const carMap = new Map();
    
    for(const record of records){
        const [timeStr, car, type] = record.split(" ");
        const timeArr = timeStr.split(":").map(Number);
        const timestamp = timeArr[0] * 60 + timeArr[1];
        if(type === "IN"){
            const base = carMap.get(car) ?? 0;
            carMap.set(car, base + DAY_TIME - timestamp);
        }else{
            const base = carMap.get(car) ?? 0;
            carMap.set(car, base - DAY_TIME + timestamp);
        }
    }
    
    const answer = [...carMap.entries()].sort().map(([car, time]) => {
        const overflow = time - 기본시간;
        if(overflow < 0) return 기본요금;
        else{
            return 기본요금 + Math.ceil(overflow / 단위시간) * 단위요금;
        }
    });
    
    
    return answer;
}