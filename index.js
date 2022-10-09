let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(30);//adds new number to end of the array dynamicly changes subtraction 
let lastIndex = ages[ages.length - 1]; //finds the last index in the array and sets it into variable.
let firstIndex = ages[0];// sets first index in a variable.
let subIndex = lastIndex - firstIndex;// subtracts last index in array from first index in array.

console.log(subIndex);
