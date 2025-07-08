function solution(num_list) {
    const multiplySum = num_list.reduce((acc, val) => acc * val);
    const squareOfSum = num_list.reduce((acc, val) => acc + val) ** 2;
    return multiplySum < squareOfSum ? 1 : 0;
}