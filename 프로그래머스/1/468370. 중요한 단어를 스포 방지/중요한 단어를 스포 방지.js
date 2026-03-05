function solution(message, spoiler_ranges) {
    const dictMap = new Map();
    
    let word = "";
    let start = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] === " "){
            const list = dictMap.get(word) ?? [];
            list.push([start, i]);
            dictMap.set(word, list);
            
            word = "";
            start = i + 1;
        }else{
            word += message[i];
        }
    }
    const flagMap = new Map(dictMap);
    console.log(flagMap === dictMap)
}