function solution(a, d, included) {
    const answer = included.reduce((acc, val, idx) => {
        if(val) return acc + (a + d * idx);
        else return acc;
    }, 0);
    
    return answer;
}