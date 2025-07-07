function solution(my_string, overwrite_string, s) {
    const prev_str = my_string.slice(0, s);
    const after_str = my_string.slice(s);
    const leftLen = after_str.length - overwrite_string.length;
    let answer = "";
    if(leftLen >= 0){
        answer = prev_str + overwrite_string + after_str.slice(overwrite_string.length);
    }else{
         answer = prev_str + overwrite_string;
    }
    
    return answer;
}