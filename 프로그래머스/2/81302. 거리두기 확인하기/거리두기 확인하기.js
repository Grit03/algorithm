// 대기실 5개, 대기실 크기 5*5
// 맨해튼 거리가 2 이하로 앉으면 안됨 -> 파티션있는 경우 허용, 빈 테이블 불허용
// 대기실별로 거리두기 되면 1, 아니면 0
// P 사람, O 빈테이블, X 파티션
function solution(places) {
    // 1, 1 -> [0, 1], [1, 0] // 음수면 다 음수로
    // 0, 2 -> 0 이 아닌 부분에 1
    const cases = [[0, 2], [1, 1], [2, 0], [0, -2], [-1, -1], [-2, 0], [-1, 1], [1, -1]];
    const mustNotPeople = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    const shouldBlock = {
        "02": [[0, 1]],
        "11": [[0, 1], [1, 0]],
        "20": [[1, 0]],
        "0-2": [[0, -1]],
        "-1-1": [[0, -1], [-1, 0]],
        "-20": [[-1, 0]],
        "-11": [[-1, 0], [0, 1]],
        "1-1": [[1, 0], [0, -1]],
    }
    
    const SIZE = 5;

    
    const ans = places.map((place) => {
        const room = place.map((str) => str.split(""));
        for(let row = 0; row < room.length; row++){
            for(let col = 0; col < room.length; col++){
                const isPerson = room[row][col] === "P";
                if(!isPerson) continue;
                // 사람 일경우 주변 살펴보기
                // 무조건 사람이 있으면 안되는 경우
                for(const [tRow, tCol] of mustNotPeople){
                    if(row+tRow >= SIZE || row+tRow < 0 || col+tCol >= SIZE || col+tCol < 0) continue; // 범위 넘어가면 건너뛰기
                    const otherPeoplePresent = room[row+tRow][col+tCol] === "P";
                    if(otherPeoplePresent) return 0;
                }
                for(let k =0; k < cases.length; k++){
                    const [tRow, tCol] = cases[k]; // 현재 살펴보는 좌표
                    if(row+tRow >= SIZE || row+tRow < 0 || col+tCol >= SIZE || col+tCol < 0) continue; // 범위 넘어가면 건너뛰기
                    const otherPeoplePresent = room[row+tRow][col+tCol] === "P";
                    // 사람이 있는 경우 막혀있지 않으면, 거리두기 X
                    if(otherPeoplePresent){
                        const sb = shouldBlock[`${tRow}${tCol}`];
                        for(const [br, bc] of sb){
                            if(row+br >= SIZE || row+br < 0 || col+bc >= SIZE || col+bc <0) continue; // 범위 넘어가면 건너뛰기
                            // 파티션이어야만 함
                            if(room[row + br][col + bc] !== "X") return 0; // 아니면 거리두기 X
                        }
                        
                    }
                }
            }
        }
        return 1; // 다 통과하면 거리두기 성공
    });
    console.log(ans);
    return ans;
}