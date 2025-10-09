// (,) 개수가 동일한 경우 -> 균형잡힌 괄호
// () 짝이 맞는 경우 -> 올바른 괄호

function isRight(str){
    const stack = [];
    for(const s of str.split("")){
        if(s === "(") stack.push(s);
        else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}

function solution(p) {
    if(p === "") return p;
    
    let count = 0;
    let arr = [];
    for(let i=0; i <p.length; i++){
        count += p[i] === "(" ? 1 : -1;
        if(i>0 && count === 0){
            arr = [p.slice(0, i+1), p.slice(i+1)];
            break;
        }
    }
    const [u, v] = arr;
    
    // 올바른 문자열인 경우
    if(isRight(u)){
        return u + solution(v);
    }else{
        const reverseU = u.slice(1, u.length -1).split("").map((c) => c === "(" ? ")" : "(").join("");
        console.log("reverse: ", reverseU);
        return "(" + solution(v) + ")" + reverseU;
    }

}
