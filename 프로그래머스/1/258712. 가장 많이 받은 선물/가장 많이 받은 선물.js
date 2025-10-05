function solution(friends, gifts) {
    
    // 받은 선물 개수
    const countMap = friends.reduce((acc, name) => {
        acc[name] = 0;
        return acc;
    }, {});
    
    // 특정 사람이 준 선물 map
    const giftMap = friends.reduce((acc, name) => {
        acc[name] = {...countMap}; // 받은 선물 개수와 같은 형식
        return acc;
    }, {});
    
    gifts.forEach((list) => {
        const [from, to] = list.split(" ");
        giftMap[from][to] += 1;
        countMap[to] += 1;
    });
    const result = new Map();
    
    function getScore(totalGive, totalGet){
        return totalGive - totalGet;
    }
    
    for(let i = 0; i <friends.length; i++){
        const from = friends[i];
        for(let j = i+1; j < friends.length; j++){
            const to = friends[j];
            if(from === to) continue;
            // 개수가 같은 경우 (주고 받지 않은 경우도 0으로 같음)
            if(giftMap[from][to] === giftMap[to][from]){
                const fromGive = Object.values(giftMap[from]).reduce((a, b) => a +b);
                const toGive = Object.values(giftMap[to]).reduce((a, b) => a +b); 
                const fromScore = getScore(fromGive, countMap[from]);
                const toScore = getScore(toGive, countMap[to]);
                
                if(fromScore === toScore){
                    continue;
                }
                else if(fromScore > toScore) result.set(from, (result.get(from) ?? 0) +1);
                else result.set(to, (result.get(to) ?? 0) +1);
            }
            // 주고 받은 기록이 있고, 개수가 다른 경우
            else if(giftMap[from][to] > giftMap[to][from]){
                result.set(from, (result.get(from) ?? 0) +1);
            }else{
                result.set(to, (result.get(to) ?? 0) +1);
            }
        }
    }
    console.log(result)
    return [...result.values()].sort((a, b) => b-a)[0] ?? 0;
}