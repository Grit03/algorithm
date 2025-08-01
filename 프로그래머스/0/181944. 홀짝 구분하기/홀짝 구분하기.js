const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    const isEven = n % 2 === 0;
    console.log(`${n} is ${isEven ? "even" : "odd"}`);
});