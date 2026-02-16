function solution(phone_book) {
    const set = new Set(phone_book);

    
    let flag = true;
    for(const numbers of phone_book){
        for(let i=1; i<numbers.length; i++){
            if(set.has(numbers.slice(0, i))){
                flag = false;
                return flag;
            }
        }
    }
   return flag;
}