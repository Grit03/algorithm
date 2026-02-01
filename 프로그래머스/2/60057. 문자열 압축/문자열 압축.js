function solution(s) {
    let answer = 9999;
    if(s.length === 1) return 1;
    for(let i = 1; i <= Math.floor(s.length /2); i++){
        let compressed = "";
        let currentChars = s.slice(0, i);
        let count = 1;
        
        for(let j = i; j < s.length; j += i){
            const next = s.slice(j, j+i);
            if(currentChars === next) count++;
            else{
                compressed += `${count <= 1 ? "" : count}${currentChars}`
                count = 1;
                currentChars = next;
            }
        }
        compressed += `${count <= 1 ? "" : count}${currentChars}`
        answer = Math.min(answer, compressed.length);
    }
    return answer;
}