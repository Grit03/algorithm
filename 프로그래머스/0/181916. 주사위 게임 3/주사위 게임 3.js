
function solution(a, b, c, d) {
    // 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
    if(a === b && b === c && c === d) return 1111 * a;
    
    // 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가
    // q(p ≠ q)라면 (10 × p + q)^2 점을 얻습니다.
    if(b === c && c === d) return (10 * b + a) ** 2;
    if(a === c && c === d) return (10 * a + b) ** 2;
    if(a === b && b === d) return (10 * a + c) ** 2;
    if(a === b && b === c) return (10 * a + d) ** 2;
    
    // 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면
    // (p + q) × |p - q|점을 얻습니다.
    if(a === b && c === d) return (a + c) * Math.abs(a - c);
    if(a === c && b === d) return (a + b) * Math.abs(a - b);
    if(a === d && b === c) return (a + b) * Math.abs(a - b);
    
    // 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가
    // 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
    if(a === b) return c * d;
    if(a === c) return b * d;
    if(a === d) return b * c;
    if(b === c) return a * d;
    if(b === d) return a * c;
    if(c === d) return a * b;
    
    return Math.min(a, b, c, d);
    
    
}