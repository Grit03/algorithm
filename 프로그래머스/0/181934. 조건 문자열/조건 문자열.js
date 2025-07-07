function solution(ineq, eq, n, m) {
    if(ineq === "<"){
        return Number(eq === "=" ? n <= m : n < m);
    }else{
        return Number(eq === "=" ? n >= m : n > m);
    }
   
}