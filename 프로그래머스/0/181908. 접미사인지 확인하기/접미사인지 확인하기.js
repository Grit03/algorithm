function solution(my_string, is_suffix) {
    
    const suffixes = Array.from({length: my_string.length}, (_, idx) => my_string.slice(idx));
    return suffixes.includes(is_suffix) ? 1 : 0;
}