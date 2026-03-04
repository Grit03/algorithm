function solution(nums) {
    const max = Math.floor(nums.length / 2);
    const set = new Set(nums);
    
    return Math.min(set.size, max);
}