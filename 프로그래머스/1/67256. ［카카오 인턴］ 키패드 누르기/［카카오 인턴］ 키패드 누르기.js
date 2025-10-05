function getNumCord(keypad, num){
    for(let row = 0; row < keypad.length; row++){
        for(let col = 0; col < keypad[row].length; col++){
            if(keypad[row][col] === num){
                return [row, col];
            }
        }
    }
}

function getDistance(hand, point){
    const [hRow, hCol] = hand;
    const [row, col] = point;
    
    return Math.abs(hRow-row) + Math.abs(hCol-col);
}

function solution(numbers, hand) {
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"]
    ];
    
    let left = [3, 0];
    let right = [3, 2];
    

    const answer = numbers.map((num) => {

        
        const numCord = getNumCord(keypad, num);
        const leftDistance = getDistance(left, numCord);
        const rightDistance = getDistance(right, numCord);
        if([1, 4, 7].includes(num)){
            left = numCord;
            return "L";
        }
        if([3, 6, 9].includes(num)){
            right = numCord;
            return "R";
        }
        if(leftDistance === rightDistance){
            if(hand === "left"){
                left = numCord;
                return "L";
            }else{
                right = numCord;
                return "R";
            }
        }
        else if(leftDistance < rightDistance){
            // 왼손이 더 가까운 경우
            left = numCord;
            return "L";
        }else{
            right = numCord;
            return "R";
        }
    }).join("");
    
    console.log(answer);
    return answer;
}