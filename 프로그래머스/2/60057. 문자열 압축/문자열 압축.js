function solution(s) {
    let min = Infinity;
    for(let len = 1; len <=s.length; len++){
        let prev = s.slice(0, len);
        let count = 1;
        let result = "";
        for(let start = len; start <s.length; start +=len){
            const cur = s.slice(start, start+len);
            if(prev === cur){
                count++;
            }else{
                result += count === 1 ? prev : `${count}${prev}`;
                prev = cur;
                count = 1;
            }
        }
        result += count === 1 ? prev : `${count}${prev}`;
        min = Math.min(min, result.length);
    }

    return min;
}