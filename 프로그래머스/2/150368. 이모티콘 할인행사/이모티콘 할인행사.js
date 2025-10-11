// 목표: 플러스 서비스 가입자를 최대한 늘리기
// 판매액을 최대한 늘리기

// n명의 이용자에게 이모티콘 m개를 할인
// 할인율 10, 20, 30, 40 중 하나

// 사용자는 자신의 기준에 따라, 일정 비율 할인하는 이모티콘 모두 구매
// 이모티콘 구매 비용의 합이 일정 가격 이상 -> 구매 취소후 이모티콘 플러스 가입
function solution(users, emoticons) {
    
    const cases = [];
    const limit = emoticons.length;
    const discounts = [40, 30, 20, 10];
    
    function dfs(arr, depth, limit){
        if(depth === limit){
            cases.push(arr);
            return;
        }
        for(let i=0; i < discounts.length; i++){
            dfs([...arr, discounts[i]], depth+1, limit);
        }
    }
    
    dfs([], 0, limit);
    
    let answer = [];
    
    for(const discountCases of cases){
        let emojiPlusJoin = 0;
        let total = 0;
        
        // 유저 순회
        for(let userId = 0; userId < users.length; userId++){
            const [ratio, limitPrice] = users[userId];
            let userPurchase = 0;
            // 이모티콘 순회
            for(let i=0; i<emoticons.length; i++){
                const discountRatio = discountCases[i];
                // 일정 이상 할인해야지만 구매
                if(discountRatio >= ratio){
                    userPurchase += emoticons[i] * (100 - discountRatio)/100; // 가격 
                }
                if(userPurchase >= limitPrice){
                    // 일정 가격 이상 샀다면 다 취소하고, 이모티콘 플러스 가입
                    emojiPlusJoin++;
                    userPurchase = 0;
                    break;
                }
            }
            // 지금까지 산거 다 구매 완료
            total += userPurchase;
            userPurchase = 0;
        }
        answer.push([emojiPlusJoin, total]);
    }
    
    answer = answer.sort((a, b) => {
        if(a[0] === b[0]){
            return b[1] - a[1];
        }
        return b[0] - a[0];
    });
    
    return answer[0];
}