function solution(s) {
    const numMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    
    const keys = Object.keys(numMap);
    
    let answer = s;
    
    for(const key of keys){
        answer = answer.replaceAll(key, numMap[key]);
    }
    
    return Number(answer);
}