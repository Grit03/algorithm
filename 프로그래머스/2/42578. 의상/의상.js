function solution(clothes) {
    const clothesObj = {};
    
    for(const [clothesName, type] of clothes){
        const clothesArr = clothesObj[type];
        if(!clothesArr) clothesObj[type] = [clothesName];
        else clothesArr.push(clothesName);
    }
    
    // 전체 아무것도 안 선택하는 케이스 제외
    const answer = Object.values(clothesObj).reduce((acc, item) => acc * (item.length + 1), 1) - 1;
    
    
    return answer;
}