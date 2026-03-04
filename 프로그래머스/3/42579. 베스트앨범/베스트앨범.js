function solution(genres, plays) {
    // 장르에 속한 곡이 하나라면, 하나의 곡만 선택
    
    const genresMap = {};
    
    for(let i = 0; i < genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        
        const playInfo =  genresMap[genre] ?? [];
        playInfo.push([i, play]);
        
        genresMap[genre] = playInfo;
    }
    
    const sorted = Object.values(genresMap).sort((a, b) => {
        return b.reduce((acc, item) => acc + item[1], 0) -  a.reduce((acc, item) => acc + item[1], 0)
    });
    
    
    const answer = sorted.flatMap((arr) => {
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, 2);
    });
    
    
    return answer.map(([i, _]) => i);
    
}