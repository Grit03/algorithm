function solution(board, moves) {
    const colNum = board[0].length;
    
    // 같은 열끼리 묶기
    const cols = [];
    for(let i=0; i <colNum; i++){
        const col = [];
        for(let j=0; j < board.length; j++){
            if(board[j][i] !== 0) col.push(board[j][i]);
        }
        cols.push(col);
    }
    
    const stack = [];
    let result = 0;
    for(const move of moves){
        const doll = cols[move - 1].shift();
        if(doll){
            if(doll === stack.at(-1)){
                stack.pop();
                result += 2;
                continue;
            }
            stack.push(doll);
        }
    }

    return result;
}