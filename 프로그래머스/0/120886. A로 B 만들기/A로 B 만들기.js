function solution(before, after) {
    // 구성요소와 그 개수가 일치하면 만들 수 있다.
    const beforeDict = new Map();
    const afterDict = new Map();
    for(const char of before){
        beforeDict.set(char, (beforeDict.get(char) ?? 0) +1);
    }
    
    for(const char of after){
        afterDict.set(char, (afterDict.get(char) ?? 0) +1);
    }
    
    let flag = 1;
    for(const [key, count] of beforeDict.entries()){
        if(!afterDict.get(key)){
            flag = 0;
            break;
        }
        if(afterDict.get(key) !== count){
            flag = 0;
            break;
        }
    }
    
    return flag;
}