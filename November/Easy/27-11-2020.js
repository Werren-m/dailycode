// Check lowest total and highest total addition of 5 integer

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