function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 };
    const options = { '*': 2, '#': -1, "": 1 };
    
    let dart = dartResult.match(/\d+[SDT][*#]?/g);
    let scores = Array.from({lenth: dart.length}, () => 0);
    
    for(let i=0; i < dart.length; i++){
        const match = dart[i].match(/(\d+)(S|D|T)([*#]?)/);
        console.log(match[1], match[2], match[3], bonus[match[2]], options[match[3]]);
        const score = (Number(match[1]) ** bonus[match[2]]) * options[match[3]];
        scores[i] = score;
        if(scores[i-1] && match[3] === "*") scores[i-1] *= options[match[3]];
    }
    console.log(scores);
    return scores.reduce((a, b) => a+b);
  
}