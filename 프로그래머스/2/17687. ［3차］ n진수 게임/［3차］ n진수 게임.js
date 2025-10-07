function solution(n, t, m, p) {
    
    let count = 0;
    let str = "";
    
    while(str.length < t * m){
        str += count.toString(n).toUpperCase();
        count += 1;
    }
    
    let answer = "";
    for(let i = 0 ; i < t; i++){
        answer += str[m * i + (p - 1)];
    }
    
 
    return answer;
}