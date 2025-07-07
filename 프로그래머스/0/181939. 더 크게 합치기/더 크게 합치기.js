function solution(a, b) {
    const first = Number("" + a + b);
    const second = Number("" + b + a);
    
    return first >= second ? first : second;
}