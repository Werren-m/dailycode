'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let tot = 0;
    let lowest=arr[0];
    let highest=arr[0];
    for(let i=0; i<arr.length; i++){
        tot += arr[i]
        highest >= arr[i] ? true : highest = arr[i]
        lowest <= arr[i] ? true : lowest = arr[i]
    }
    console.log(tot-highest,tot-lowest)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}