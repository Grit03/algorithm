function solution(number) {
    return [...number].reduce((acc, char) => Number(acc) + Number(char)) % 9;
}