#!/usr/bin/env node 
// shebang

const lib = require("./lib");

let command = process.argv[1].split('/').pop(); // CLI 명령어 인식
let numbers = process.argv.slice(2).map((n) => parseFloat(n));

if (command === "avg" && numbers.length === 0) {
    console.log("Insufficient parameters for avg. Please provide numbers.");
    process.exit(1);
} else if ((command === "prime" || command === "factorial") && numbers.length !== 1) {
    console.log(`Insufficient parameter for ${command}. Please provide one number.`);
    process.exit(1);
}

if(numbers.some((n)=>isNaN(n))){
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;

switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);



