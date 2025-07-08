function solution(arr, queries) {
    for(const [i, j] of queries){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}