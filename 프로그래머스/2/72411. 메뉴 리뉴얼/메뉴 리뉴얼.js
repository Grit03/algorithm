// 코스 요리는 손님이 주문할 때, 가장 많이 함께 주문한 단품메뉴들
// 코스 요리 메뉴는 최소 2가지 이상 단품 메뉴
// 코스 요리 메뉴 후보에 최소 2명 이상의 손님으로 부터 주문되어야 함

// 각 손님은 단품 메뉴 2개 이상 주문, A-Z가 단품메뉴
// 주어진 개수의 알파벳 쌍을 가장 많이 포함된 케이스가 해당 개수의 결과가 되고,
// 만약 개수가 같으면, 둘다 포함

function getCase(orders, count){
    const cntObj = orders.reduce((acc, str) => {
        const arr = str.split("").sort(); // 알파벳 순서대로 정렬
        let com = "";
        
        function dfs(arr, start, depth, count){
            if(depth === count){
                acc[com] = (acc[com] ?? 0) +1;
                return;
            }
            for(let i=start; i<arr.length; i++){
                com += arr[i];
                dfs(arr, i+1, depth+1, count);
                com = com.slice(0, com.length-1);
                
            }
        }
        dfs(arr, 0, 0, count);
        return acc;
    }, {});
    const max = Math.max(...Object.values(cntObj));
    if(max <=1) return [];
    const result = Object.entries(cntObj).filter((item) => item[1] === max).map((item) => item[0]);
    
    return result;
}

function solution(orders, course) {
    let answer = [];
    for(const num of course){
        const c = getCase(orders, num);
        answer = [...answer, ...c];
    }
    return answer.sort();
}