const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const line = input[0].split("");
    let result = "";
    
    for(const char of line){
        if(char === char.toUpperCase()){
            result += char.toLowerCase();
        }else{
           result += char.toUpperCase();
        }
    }
    
    console.log(result);
});