function solution(a, b) {
    const answer = Math.max(Number(`${a}${b}`), 2 * a * b);
    return answer;
}