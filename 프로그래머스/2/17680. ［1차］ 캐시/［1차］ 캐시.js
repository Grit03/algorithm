function solution(cacheSize, cities) {
    const cache = [];
    // 캐시가 아예 존재하지 않는 경우 예외 처리
    if(cacheSize === 0) return cities.length * 5;
    
    let time = 0;
    for(const city of cities){
        const cityLowercase = city.toLowerCase();

        if(cacheSize === 0){
            time +=5;
            continue;
        }
        if(cache.includes(cityLowercase)){
            time += 1;
            // 현재 도시를 가장 최신 사용으로 위치 변경
            const index = cache.indexOf(cityLowercase);
            cache.splice(index, 1);
            cache.push(cityLowercase);
        }
        else {
            if(cache.length === cacheSize){
                cache.shift();
            }
            cache.push(cityLowercase);
            time += 5;
        }
    }
    return time;
}