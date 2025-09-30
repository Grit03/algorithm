const transform = (str) => str === "1" ? "#" : " ";

function solution(n, arr1, arr2) {
    
    const scretMap = arr1.map((num, idx) => num | arr2[idx]);
    
    const answer = scretMap.map((num) => {
        const signs = num.toString(2).split("").map(transform).join("");
        return " ".repeat(n-signs.length) + signs;
    });
    
    return answer;
}