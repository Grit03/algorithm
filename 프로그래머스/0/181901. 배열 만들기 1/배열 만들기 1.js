function solution(n, k) {
    const arr = [];
    let i = 1;
    while(n >= k * i){
        arr.push(k * i);
        i++;
    }
    return arr;
}