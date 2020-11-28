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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the isValid function below.
function isValid(s) {
    let arr = s.split('');
    let test = []
    let count = 1;
    let low;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] <= arr[j]){
                low = arr[i];
                arr[i] = arr[j];
                arr[j] = low;
            }
        } 
    }
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<=arr.length; j++){
            arr[i] == arr[j] ? (count++) : (test.push(count), (count = 1), arr.splice(0,j), (j = 0))
        }
    }
    let lowest = test[0];
    let highest = test[0];   
    let lowestCount = 0;
    let highestCount = 0; 
    for(let i=0; i<test.length; i++){
        lowest <= test[i] ? true : lowest = test[i];
        highest >= test[i] ? true : lowest = test[i];
    }   
    for(let i=0; i<test.length; i++){
        lowest == test[i] ? lowestCount++ : true;
        highest == test[i] ? highestCount++ : true;
    }
    if(highest-lowest > 1){
        return "NO"
    }else{
        if(Math.abs((highestCount*highest) - (lowestCount*lowest)) > 1){
            return "NO"            
        }else{
            return "YES"
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
