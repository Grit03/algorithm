function feeCalculator(parkingTime, feeTable){
    const [기본시간, 기본요금, 단위시간, 단위요금] = feeTable;
    if(parkingTime <= 기본시간) return 기본요금;
    return 기본요금 + (Math.ceil((parkingTime - 기본시간) /단위시간) * 단위요금);
}

function solution(fees, records) {
    const endOfDayTimestamp = 23 * 60 + 59;
    
    const totalTime = {};
    const carInTimeMap = {};
    
    for(const record of records){
        const [time, car, type] = record.split(" ");
        const [hour, min] = time.split(":").map(Number);
        const timestamp = hour*60 + min;
        if(type === "IN"){
            carInTimeMap[car] = timestamp;
        }else{
            totalTime[car] = (totalTime[car] ?? 0) + timestamp - carInTimeMap[car];
            delete carInTimeMap[car];
        }
    }
    
    Object.entries(carInTimeMap).forEach(([key, value]) => {
        totalTime[key] = (totalTime[key] ?? 0) + endOfDayTimestamp - carInTimeMap[key];
    })
    

    
    const answer = [...Object.entries(totalTime)].map(([car, time]) => [car, feeCalculator(time, fees)]).sort((a, b) => a[0] - b[0]).flatMap((cur) => cur[1]);
    return answer;
}