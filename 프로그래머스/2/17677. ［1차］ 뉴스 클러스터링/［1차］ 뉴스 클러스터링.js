function getSet(str){
    return str.slice(0, str.length -1).split("")
        .map((char, i) => char+ str[i+1])
        .filter((chunk) => !(/[^a-z]/.test(chunk)));
}

function solution(str1, str2) {
    const iStr1 = str1.toLowerCase();
    const iStr2 = str2.toLowerCase();
    
    const set1 = getSet(iStr1);
    const set2 = getSet(iStr2);

    
    // 자카드 유사도
    // 교집합의 크기 / 합집합의 크기

    
    const count1 = set1.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    }, {});
    
    const count2 = set2.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    }, {});
    
    let 합집합크기 = 0;
    let 교집합크기 = 0;
    
    const keys = new Set([...set1, ...set2]);
    
    keys.forEach((key) => {
        if(count1[key] === undefined){
            합집합크기 += count2[key];
        }
        else if(count2[key] === undefined){
            합집합크기 += count1[key];
        }else{
            console.log(count1[key], count2[key]);
            합집합크기 += Math.max(count1[key], count2[key]);
        }
    });
    
    Object.keys(count2).forEach((key) => {
        if(count1[key] === undefined) return; // 존재하지 않으면 교집합 아님
        교집합크기 += Math.min(count1[key], count2[key]);
    });
    
    // 나눗셈 나누는 값이 0 인지 체크
    if(합집합크기 === 0) return 65536;
    if(교집합크기 === 0) return 0;
    else return Math.floor((교집합크기/합집합크기) * 65536);
    
}