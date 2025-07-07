function solution(code) {
    let mode = 0;
    let ret = ""
    const codeArr = [...code];
    
    for(let i = 0; i<codeArr.length; i++){
        if(mode === 0){
            if(codeArr[i] !== "1"){
                if(i % 2 === 0) ret += codeArr[i];
            }else{
                mode = 1;
            }
        }else{
            if(codeArr[i] !== "1"){
                if(i % 2 === 1) ret += codeArr[i];
            }else{
                mode = 0;
            }
        }
    }
    
    if(ret.length === 0) return "EMPTY";
    
    return ret;
    
}