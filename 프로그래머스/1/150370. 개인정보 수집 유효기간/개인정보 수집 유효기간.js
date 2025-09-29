function addMonth([year, month, day], add) {
  const total = (month - 1) + add;
  const newYear = year + Math.floor(total / 12);
  const newMonth = (total % 12) + 1;
  return [newYear, newMonth, day];
}

function solution(today, terms, privacies) {
    const [year, month, day] = today.split(".").map(Number);
    
    console.log(year, month, day);
    
    const termsMap = terms.reduce((acc, cur) => {
        const [term, duration] = cur.split(" ");
        acc[term] = Number(duration);
        return acc;
    }, {});
    
    
    const ans = privacies.reduce((ans, pravicy, idx) => {
        const [dateStr, type] = pravicy.split(" ");
        console.log(dateStr, type);
        const date = dateStr.split(".").map(Number);
        const [dYear, dMonth, dDay] = addMonth(date, termsMap[type]);
        console.log(`${dYear}, ${dMonth}, ${dDay}`)
        
        if(dYear < year) return [...ans, idx+1];
        if(dYear === year && dMonth < month) return [...ans, idx+1];
        if(dYear === year && dMonth === month && dDay - 1 < day) return [...ans, idx+1];
        return ans;
    }, []);
    
    console.log(ans);
    
    
    return ans;
}