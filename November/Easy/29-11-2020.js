//convert AM - PM format to 24 hour format

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let arr = s.split('')
    if(arr[arr.length-2] == "P" && (arr[0]+arr[1] != 12)){
        arr[0] = Number(arr[0]) + 1;
        arr[1] = Number(arr[1]) + 2;
    }else if(arr[arr.length-2] == "A" && (arr[0]+arr[1] == 12)){
        arr[0] = 0;
        arr[1] = 0;
    }
    arr.pop()
    arr.pop()
    let test = arr.join('')
    return test
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
