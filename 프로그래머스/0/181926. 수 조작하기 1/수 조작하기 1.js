const operator = {
    w: (val) => val+1,
    s: (val) => val-1,
    d: (val) => val+10,
    a: (val) => val-10,
}

function solution(n, control) {
    return [...control].reduce((acc, char) => operator[char](acc), n);
}