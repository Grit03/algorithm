function compare(score, first, second){
    if(score[first] === score[second]) return first <= second ? first : second;
    return score[first] > score[second] ? first : second;
}

function solution(survey, choices) {
    const score = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    
    const MIDDLE = 4;
    
    survey.map((test, idx) => {
        const char = test.split("");
        const ans = choices[idx] - MIDDLE;
        if(ans === 0) return;
        else if(ans < 0) score[char[0]] += Math.abs(ans);
        else score[char[1]] += ans; 
    });
    
    
    let answer = "";
    
    const list = ["RT", "CF", "JM", "AN"];
    for(const elem of list){
        const [first, second] = elem.split("");
        answer += compare(score, first, second);
    }
    
    console.log(answer);

    return answer;
}