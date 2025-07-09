function solution(my_string, m, c) {
    const table = [];
    for(let i = 0; i < my_string.length; i+=m){
        table.push([...my_string.slice(i, i+m)]);
    }
    let answer = "";
    for(let i = 0; i < table.length; i++){
        answer += table[i][c-1];
    }
    return answer;
}