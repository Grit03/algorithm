function solution(intStrs, k, s, l) {
    const answer = [];
    for(const str of intStrs){
        const num = Number(str.slice(s, s+l));
        if(num > k) answer.push(num); 
    }
    
    return answer;
}