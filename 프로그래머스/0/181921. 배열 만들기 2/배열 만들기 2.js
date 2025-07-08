function solution(l, r) {
    const arr = Array.from({length: r-l+1}, (_, idx) => idx +l);
    const answer = arr.filter((val) => {
        const set = new Set([...String(val)]);
        const setString = [...set].sort((a, b) => a - b).join("");
        
        return set.size <= 2 && (setString === "0" || setString === "5" || setString === "05");
        
    });
    return answer.length === 0 ? [-1] : answer;
}