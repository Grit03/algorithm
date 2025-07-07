function solution(code) {
    let mode = 0;
    const codeArr = [...code];
    
    let ret = [...code].reduce((acc, value, idx) => {
        if(value === "1"){
            mode = mode === 0 ? 1 : 0;
        }
        else if(idx % 2 === 0 && mode === 0){
            return acc + value;
        } else if(idx % 2 !== 0 && mode === 1){
            return acc + value;
        }
        return acc;
    }, "");
    
    return ret.length === 0 ? "EMPTY" : ret;
    
}