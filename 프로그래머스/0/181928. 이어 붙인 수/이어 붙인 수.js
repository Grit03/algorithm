function solution(num_list) {
    const { odd, even } = num_list.reduce((acc, val) => {
        return val % 2 === 0 ? {...acc, even: acc.even + val} : {...acc, odd: acc.odd + val};
    }, {odd: "", even: ""});
   
    
    return Number(odd) + Number(even);
}