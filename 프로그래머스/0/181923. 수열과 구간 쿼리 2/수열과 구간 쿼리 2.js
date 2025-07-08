function solution(arr, queries) {
    const answer = [];
    for(const [s, e, k] of queries){
        const numbers = arr.slice(s, e+1).filter((val) => val > k);
        if(numbers.length === 0){
            answer.push(-1);
        }else{
            const min = numbers.reduce((acc, val) => Math.min(acc, val));
            answer.push(min);
        }
       
    }
    return answer;
}