function solution(numbers) {
    const total = 45;
    const sum = numbers.reduce((acc, num) => acc+num);
    return total - sum;
}