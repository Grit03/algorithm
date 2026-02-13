let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [start, final] = input[0].split(" ").map(Number);

let count = 1;
let flag = false;
while (final > start){
  if (final % 2 === 0) {
    // 짝수
    count++;
    final = parseInt(final / 2);
  } else if (String(final).endsWith("1")) {
    // 홀수
    count++;
    final = parseInt((final - 1) / 10);
  }else{
    break;
  }
  if(final === start){
    flag = true;
    break;
  }
}

if(!flag){
  console.log(-1);
}else{
  console.log(count);
}
  
