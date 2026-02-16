function solution(my_string) {
    const hash = new Set();
    const strArr = my_string.split("");
    
    const answer = strArr.map((char) => {
        const isDuplicated = hash.has(char);
        if(!isDuplicated){
            hash.add(char);
            return char;
        }
        else return "";
    });
    
    return answer.join("");
}