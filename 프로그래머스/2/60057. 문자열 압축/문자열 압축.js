// 1개 이상의 단위로 잘라서 압축
// 1개인 경우는 1 생략
// 1개 이상인 단위로 문자열을 잘라 압축했을 때, 가장 짧은 개수

// 1개~Math.floor(길이/2)
function solution(s) {
    const length = s.length;
    
    let min = Infinity;

    for(let i = 1; i <= length; i++){
        const charArr = s.split("");
        let left = length;
        let prev;
        let count = 1;
        let zipped = "";
        for(let j=0; j <= length; j += i){
            if(j+i > length){
                if(!prev) {
                    zipped = s;
                    break;
                }
                zipped += (count === 1) ? `${prev}` :`${count}${prev}`;
                left = j;
                break;
            }
            const key = charArr.slice(j, j+i).join("");
            if(!prev){
                prev = key;
                continue;
            }
            if(prev === key){
                count += 1;
            }else{
                zipped += (count === 1) ? `${prev}` :`${count}${prev}`;
                prev = key;
                count = 1;
            }
        }
        const leftStr = charArr.slice(left).join("") ?? "";
        const result = zipped + leftStr;
        min = Math.min(min, result.length);
        
    }
    
    return min;

}