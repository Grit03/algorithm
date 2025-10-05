function solution(s) {
    const setStr = s.replace(/^{|}$/g, "").match(/{([0-9,]+)}/g);
    const sets = setStr.sort((a, b) => a.length - b.length).map((s) => s.replace(/^{|}$/g, "").split(",").map(Number));
    
    const tuple = [];
    const pushed = new Set();
    for(const set of sets){
        for(const value of set){
            if(!pushed.has(value)){
                tuple.push(value);
                pushed.add(value);
            }
        }
        
    }
    
    return tuple;
}