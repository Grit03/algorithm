let visited = new Array(4).fill(false);
let words = ["aya", "ye", "woo", "ma"];
let strs = [];

// 길이가 15이하인 가능한 모든 문자열 순열을 구한다
function dfs(str){
    if(str.length <= 15){
        // 빈 문자열은 제외
        if(str!=="") strs.push(str)
    }
    for(let i=0; i<4; i++){
        if(visited[i]) continue;
        visited[i] = true;
        dfs(str + words[i]);
        visited[i] = false;
    }
}

dfs("");

function solution(babbling) {
    let count = 0;
    
    // 가능한 문자열에 포함되어 있으면 카운트를 한다.
    for(let babb of babbling){
        if(strs.includes(babb)) count++;
    }
    return count;
}