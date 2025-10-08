function solution(m, n, board) {
    let currentBoard = board.map((str) => str.split(""));
    let pangs = new Set();
    const checkPoint = [[0, 0], [0, 1], [1, 0], [1, 1]];
    let count = 0;

    
    function countPang(row, col){
        const char = currentBoard[row][col];
        const newPoints = checkPoint.map(([rGap, cGap]) => [rGap + row, cGap + col]);
        for(const [newRow, newCol] of newPoints){
            if(newRow >= m || newCol>=n || currentBoard[newRow][newCol] === "") return;
            if(char !== currentBoard[newRow][newCol]) return;
        }
        for(const [nr, nc] of newPoints){
            pangs.add(`${nr} ${nc}`);
        }
    };
    
    function updateBoard(){
        // 맞는 캐릭터 지우기
        pangs.forEach((point) => {
            const [i, j] = point.split(" ");
            currentBoard[i][j] = "";
        });
        
        // 보드 업데이트
        for(let i=0; i < n; i++){
            let col = "";
            for(let j=0; j < m; j++){
                col += currentBoard[j][i];
            }
            const newCol = col.split("");
            if(newCol.length < m){
                let pushCount = m - newCol.length;
                while(pushCount > 0){
                    newCol.unshift("");
                    pushCount--;
                }
            }
            newCol.forEach((char, idx) => {
               currentBoard[idx][i] = char; 
            });
        }
        // pangs 초기화
        pangs = new Set();
    }
    

    
    while(true){
        const prevCount = count;
        for(let i=0; i < m; i++){
            for(let j=0; j < n; j++){
                countPang(i, j);
            }
        }
        count += pangs.size;
        // 더 이상 지워지는 블록이 없을 때
        if(prevCount === count) break;
        // 보드 업데이트
        updateBoard();
    }
    
    
    return count;
}