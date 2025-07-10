function solution(arr, intervals) {
    
    return intervals.map(([start, end]) => arr.slice(start, end+1)).reduce((acc, arr) => [...acc, ...arr] , []);
    
}