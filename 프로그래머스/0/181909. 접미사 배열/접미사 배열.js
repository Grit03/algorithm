function solution(my_string) {
    return Array.from({length: my_string.length}, (_, idx) => my_string.slice(idx)).sort();
}