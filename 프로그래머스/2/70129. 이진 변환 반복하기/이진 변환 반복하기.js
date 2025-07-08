function solution(s) {
    let [count, eliminated] = [0, 0];

    while(s !== "1"){
        count += 1;
        eliminated += [...s].filter((v) => v ==="0").length;
        s = s.split("0").join("").length.toString(2);
    }
    
    return [count, eliminated];
}