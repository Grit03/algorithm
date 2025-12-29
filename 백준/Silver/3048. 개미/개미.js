// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [gr1Num, gr2Num] = input[0].split(" ").map(Number);
const group1 = input[1].split("").reverse();
const group2 = input[2].split("");
const ants = [...group1, ...group2];

const flag1 = new Array(group1.length).fill(0);
const flag2 = new Array(group2.length).fill(1);
let flags = [...flag1, ...flag2];
const totalLength = flag1.length + flag2.length;
let time = Number(input[3]);

while(time > 0){
    const copyFlags = [...flags];
    for(let i=0; i < totalLength -1; i++){
        if(flags[i] === 0 && flags[i+1] === 1){
            copyFlags[i] = 1;
            copyFlags[i+1] = 0;
            const temp = ants[i];
            ants[i] = ants[i + 1];
            ants[i + 1] = temp;
        }
    }
    flags = copyFlags;
    time -= 1;
}

console.log(ants.join(""));


