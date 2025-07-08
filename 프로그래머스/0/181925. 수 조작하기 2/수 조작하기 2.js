const diff = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
}

function solution(numLog) {
    let answer = "";
    for(let i = 1; i < numLog.length; i++){
        answer += diff[numLog[i] - numLog[i-1]];
    }
    return answer;
}