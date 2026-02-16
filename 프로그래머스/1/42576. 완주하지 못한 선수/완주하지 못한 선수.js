function solution(participant, completion) {
    const personMap = new Map();
    
    // 참여자 이름과 이름 등장 횟수
    for(const person of participant){
        personMap.set(person, (personMap.get(person) ?? 0) + 1);
    }
    
    // 완주한 사람만큼 감소
    for(const person of completion){
        // personMap[person] -= 1; 이런식으로 Map은 안됨
        personMap.set(person, personMap.get(person) - 1);
    }
    
    
    // 카운트가 0이 아닌 경우 반환
    return [...personMap.entries()].filter(([person, count]) => count!==0)[0][0];
}