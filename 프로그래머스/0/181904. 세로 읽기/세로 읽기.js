function solution(my_string, m, c) {
    return [...my_string].filter((_, idx) => idx % m === c - 1).join("");
}