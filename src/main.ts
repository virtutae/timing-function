/*Measure how long it takes to `array.push` a number onto an array of the following lengths.  
Store your data in a notion database or a spreadsheet at sheets.google.com.
10 numbers
100 numbers
1_000 numbers
10_000 numbers
100_000 numbers
1_000_000 numbers
10_000_000 numbers
100_000_000 numbers
*/

let arr:number[] = [];

function addToArr (arr:number[]): number[] {
    for (let i = 0; i < 10; i++){
        arr.push(i)
    }
    return arr
}
//array.push()
// function timeCount(addToArr:number[]):void {
//     const startTime = performance.now()
//     addToArr.push(1)
//     const stopTime = performance.now()
//     const elapsedTime = stopTime - startTime;
//     console.log({elapsedTime})
// } 

//array.unshift()
// function timeCount(addToArr:number[]):void {
//     const startTime = performance.now()
//     addToArr.unshift(1)
//     const stopTime = performance.now()
//     const elapsedTime = stopTime - startTime;
//     console.log({elapsedTime})
// }

//array.pop()
function timeCount(addToArr:number[]):void {
    addToArr.unshift(1,312,312,31234,12,13,123,123,1234,123,12,412,432,4,234,234,234,2354,23,423,42)
}
const startTime = performance.now()
timeCount(arr)
const stopTime = performance.now()
const elapsedTime = stopTime - startTime;

console.log({elapsedTime})