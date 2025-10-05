function solution(id_list, report, k) {
    const reportMap = id_list.reduce((acc, name) => {
        acc[name] = new Set();
        return acc;
    }, {});
    
    const countMap = id_list.reduce((acc, name) => {
        acc[name] = 0;
        return acc;
    }, {});
    
    report = [...new Set(report)];
    
    report.forEach((li) => {
        const [reporter, reportee] = li.split(" ");
        reportMap[reporter].add(reportee);
        countMap[reportee] += 1;
    });
    
    const answer = id_list.map((id) => {
        let count = 0;
        reportMap[id].forEach((id) => {
            if(countMap[id] >= k) count +=1;
        });
        return count;
    });
    

    return answer;
}