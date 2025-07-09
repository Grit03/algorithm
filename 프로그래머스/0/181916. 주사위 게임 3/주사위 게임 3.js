
function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    const set = [...new Set(dices)];
    const map = new Map();
    for(const key of set){
        map.set(key, dices.filter((v) => v === key).length);
    }
    
    switch(map.size){
        case 1 : return 1111 * set[0];
        case 2 : {
            // 개수가 같으면
            if(map.get(set[0]) === map.get(set[1])){
                const [p, q] = set;
                return (p + q) * Math.abs(p - q);
            }else{
                // 개수가 다르면
                const [p, q] = map.get(set[0]) > map.get(set[1]) ? set : [set[1], set[0]];
                return (10 * p + q) ** 2;
            }
        }
        case 3 : {
            const mapArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
            console.log(mapArr);
            return mapArr[1][0] * mapArr[2][0];
        }
        case 4 : return set.sort((a, b) => a - b)[0];
    }
}