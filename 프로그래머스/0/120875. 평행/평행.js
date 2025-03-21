// 힌트 보고 풀이
// 경우의 수가 적은 경우 조건문으로 체크하자

function calcSlope(point1, point2){
    return (point2[0]-point1[0]) / (point2[1]-point1[1]);
}

function solution(dots) {
    let count = 0;
    // 0,1 | 2,3 선택
    if(calcSlope(dots[0], dots[1]) === calcSlope(dots[2], dots[3])){
        count = 1;
    }
    // 0,2 | 1,3 선택
    if(calcSlope(dots[0], dots[2]) === calcSlope(dots[1], dots[3])){
        count = 1;
    }
    // 0,3 | 1,2 선택
    if(calcSlope(dots[0], dots[3]) === calcSlope(dots[1], dots[2])){
        count = 1;
    }
    
    return count;
}