function solution(expression) {
    const numbers = expression.split(/[*\-+]/);
    const operators = expression.match(/[*\-+]/g);
    
    const cases = [
        ["+", "-", "*"], ["+", "*", "-"],
        ["-", "+", "*"], ["-", "*", "+"],
        ["*", "-", "+"], ["*", "+", "-"]
    ]
    
    let max = -1;
    for(const c of cases){
        const curNumbers = [...numbers];
        const curOperators = [...operators];
        for(const priority of c){
            while(curOperators.indexOf(priority) !== -1){
                const idx = curOperators.indexOf(priority);
                const exp = curNumbers[idx] + curOperators[idx] + curNumbers[idx+1];
                const value = eval(exp);
                curNumbers[idx] = `${value}`;
                curNumbers.splice(idx+1, 1);
                curOperators.splice(idx, 1);
            }
        }
        max = Math.max(max, Math.abs(Number(curNumbers[0])));
    }
    
    return max;
}