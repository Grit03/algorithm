function solution(my_strings, parts) {
    return parts.map(([s, e], idx) => my_strings[idx].slice(s, e+1)).join("");
}