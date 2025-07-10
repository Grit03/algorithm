function solution(my_string) {
    const arr = new Array(52).fill(0);
    const uppercaseInitialValue = "A".charCodeAt();
    const lowercaseInitialValue = "a".charCodeAt();
    const UPPER_CASE_COUNT = 26;
    for(const char of my_string){
        if(char.toUpperCase() === char){
             arr[char.charCodeAt() - uppercaseInitialValue] += 1;
        }else{
             arr[char.charCodeAt() - lowercaseInitialValue + UPPER_CASE_COUNT] += 1;
        }
       
    }
    return arr;
}