/*
let ages = [3, 9, 23, 64, 2, 8, 28, 93];// 1.
ages.push(30,);//adds new number to end of the array dynamicly changes subtraction   1b.
let lastIndex = ages[ages.length - 1]; //finds the last index in the array and sets it into variable.  1a.
let firstIndex = ages[0];// sets first index in a variable.   1a.
let subIndex = lastIndex - firstIndex;// subtracts last index in array from first index in array.   1a.

console.log(subIndex);
let sum = 0;
let averageAge = 0;
for(i = 0; i < ages.length; i++){
    sum = sum + ages[i]; // adds the entire array into the sum variable. 1c.
    averageAge = sum / ages.length; // takes the sum and divides it by the number of values in the array. 1c.
}console.log(Math.floor(averageAge)); // logs the average age of the array and math.floor makes it into a whole number without decimals. 1c.
*/


let avNumOfChar = 0;
let total = 0;
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for(let i = 0; i < names.length; i++ ){
    avNumOfChar += names[i].length;

}console.log(avNumOfChar / names.length);
