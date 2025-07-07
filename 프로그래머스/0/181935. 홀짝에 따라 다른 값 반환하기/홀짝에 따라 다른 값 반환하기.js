function solution(n) {
    const result = [];
    if(n % 2 === 0){
        // 짝수인 경우
        for(let i = 0; i <= n; i++){
            if(i % 2 === 0){
                result.push(i);
            }
        }
        return result.reduce((acc, value) => acc + value ** 2);
    }else{
        // 홀수인 경우
        for(let i = 0; i <= n; i++){
            if(i % 2 === 1){
                result.push(i);
            }
        }
        return result.reduce((acc, value) => acc + value);
    }
    
   
}