function timestamp([year, month, day]) {
  return ((year * 12 + month) * 28) + day;
}

function solution(today, terms, privacies) {
    const todayStr = today.split(".").map(Number);
    const todayTimestamp = timestamp(todayStr);
    
    
    const termsMap = terms.reduce((acc, cur) => {
        const [term, duration] = cur.split(" ");
        acc[term] = Number(duration);
        return acc;
    }, {});
    
    
    const ans = privacies.reduce((ans, pravicy, idx) => {
        const [dateStr, type] = pravicy.split(" ");
        const [year, month, day] = dateStr.split(".").map(Number);
        const privacyTimestamp = timestamp([year, month + termsMap[type], day]);
        
        if(privacyTimestamp <= todayTimestamp) return [...ans, idx+1];
        return ans;
    }, []);
    
    console.log(ans);
    
    
    return ans;
}