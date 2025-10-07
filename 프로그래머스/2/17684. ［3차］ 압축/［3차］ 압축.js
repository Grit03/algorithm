function solution(msg) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const dict = new Map(
        alphabet.split("").map((char, idx) => [char, idx+1])
    );
    let dictSize = dict.size;
    
    let start = 0;
    let end = 1;
    const answer = [];
    
    while(true){
        if(end > msg.length) break; 
        const keys = new Set(dict.keys());
        while(keys.has(msg.slice(start, end)) && end <= msg.length +1){
            end += 1;
        }
        answer.push(dict.get(msg.slice(start, end - 1)));
        dictSize += 1;
        dict.set(msg.slice(start, end), dictSize);
        start = end -1;
        end = start + 1;
    }
    
    return answer;
}