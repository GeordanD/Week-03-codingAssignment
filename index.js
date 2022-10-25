// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!
// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 
//////////////////////////////////////////////////////////////////////////////////////////////
let ages = [3, 9, 23, 64, 2, 8, 28, 93];//   (1.)
ages.push(30,);//adds new number to end of the array dynamically changes subtraction   (1b.)
let lastIndex = ages[ages.length - 1]; //finds the last index in the array and sets it into variable.  (1a.)
let firstIndex = ages[0];// sets first index in a variable.   (1a.)
let subIndex = lastIndex - firstIndex;// subtracts last index in array from first index in array.   (1a.)

console.log(subIndex);// this is used to test my code.
let sum = 0;
let averageAge = 0;
for(i = 0; i < ages.length; i++){
    sum = sum + ages[i]; // adds the entire array into the sum variable. (1c.)
    averageAge = sum / ages.length; // takes the sum and divides it by the number of values in the array. (1c.)
}console.log(Math.floor(averageAge)); // logs the average age of the array and math.floor makes it into a whole number without decimals. (1c.)

///////////////////////////////////////////////////////////////////////////////////////////////
// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.
// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
///////////////////////////////////////////////////////////////////////////////////////////////
let avNumOfChar = 0;
let concatName = "";
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //   (2.)
for(let i = 0; i < names.length; i++ ){  // loop that gives average number of letters of the array for each name in the array. (2a.)
    avNumOfChar += names[i].length;
}
console.log(avNumOfChar / names.length);

for(let i = 0; i < names.length; i++) { // loop that concatenates all the names together. (2b.)
concatName += names[i] + (" ");
}
console.log(concatName);// this is used to test my code.
////////////////////////////////////////////////////////////////////////////////////////////////
// 3.	How do you access the last element of any array?
////////////////////////////////////////////////////////////////////////////////////////////////
let orange = [2, 3, 4];
console.log(orange.length - 1);
orange[orange.length - 1];  //  access last element of any array array.length -1;   (3.)
////////////////////////////////////////////////////////////////////////////////////////////////
// 4.	How do you access the first element of any array?
////////////////////////////////////////////////////////////////////////////////////////////////
orange[0]; // access first element of an array  first element in an array is always zero index [0]; (4.)
////////////////////////////////////////////////////////////////////////////////////////////////
// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
////////////////////////////////////////////////////////////////////////////////////////////////
let nameLengths = []; 
for(let i = 0; i < names.length; i++){ // loop that runs all names and puts them into the new array. (5.)
    nameLengths.push(names[i].length);
}
console.log(nameLengths);
////////////////////////////////////////////////////////////////////////////////////////////////
// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
////////////////////////////////////////////////////////////////////////////////////////////////
let nameSumNames = 0;
for(let i = 0; i < nameLengths.length; i++){  // loop that calculates the sum of all elements in the array. (6.)
    nameSumNames = nameSumNames + nameLengths[i];
}
console.log(nameSumNames);// this is used to test my code.
////////////////////////////////////////////////////////////////////////////////////////////////
// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
////////////////////////////////////////////////////////////////////////////////////////////////
function wordMultiplier(word, n) {  //function takes in 2 parameters and spits out first one as a string and second one determines how many it returns. (7.)
    let repeat = "";
    for(let i = 0; i < n; i++)
    repeat += word;
   return repeat;
} 

console.log(wordMultiplier("HelloWorld", 3)); // this is used to test my code. Function you can enter any string and any number and it will write the string that many times.
/////////////////////////////////////////////////////////////////////////////////////////////////
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.
/////////////////////////////////////////////////////////////////////////////////////////////////
function wholeName(firstname, lastname){ // Function that takes in two parameters and returns a full name (8.)
    return firstname + " " + lastname;
} console.log(wholeName("Geordan", "Daugherty")); // this is used to test my code.

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
/////////////////////////////////////////////////////////////////////////////////////////////////
 let sumOf = 0;
let apples = [4, 5, 6, 7, 4, 1000];  // if you add to this array to make over 100 will check true if you go under 100 or too 100 it will mark false (9.)
let purple = [5, 3, 5, 7, 4, 300];
function sumTrue(array){
    for(let i = 0; i < array.length; i++)
    sumOf += array[i];
    if (sumOf > 100){
        return true;
    }else{
        return false;
    }
}console.log(sumTrue(purple));   // add two different arrays provided up above; // this is used to test my code.
///////////////////////////////////////////////////////////////////////////////////////////////////
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
///////////////////////////////////////////////////////////////////////////////////////////////////
let unicorn = [5, 6, 7, 3, 64, 65]   
let unicornSum = 0;
function averageApp(array){  // Function that adds all values in the array then returns the average of the array. (10.)
    for(let i = 0; i < array.length; i++)
        unicornSum = unicornSum + array[i];
        return unicornSum / array.length;
 
} console.log(averageApp(unicorn)); // this is used to test my code.
////////////////////////////////////////////////////////////////////////////////////////////////////
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
////////////////////////////////////////////////////////////////////////////////////////////////////
let letters = [5, 4, 7, 7, 4, 445];
let lettersSum = 0;
let notes = [6, 6, 8, 3, 6, 70];
let notesSum = 0;
let lettersAverage = 0;
let notesAverage = 0;

function averageArray(array1, array2){   // Function that takes in two arrays and finds the average of them and finds weather array1 is greater then array2. (11.)
    let sumWithInitial = array1.reduce(
        (previousValue, currentValue) => {
            return previousValue + currentValue;
        },
        lettersSum
    ); array1 = sumWithInitial / array1.length;
    let notesWithInitial = array2.reduce(
        (previousValue, currentValue) => {
            return previousValue + currentValue;
        },
        notesSum
    ); array2 = notesWithInitial / array2.length;

    if (array1 < array2){
        return true;
    } else{
        return !true;
    }
}console.log(averageArray(notes, letters)); // this is used to test my code. // add two different arrays provided up above
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
////////////////////////////////////////////////////////////////////////////////////////////////////////
let isHotOutside = true;
let isColdOutside = false;
let moneyInPocket = 10.50;
function willBuyDrink(isHotOutside, moneyInPocket){  // function will return true if its hot outside  & money in pocket is equal too or greater then set amount it returns true. (12.) 
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return true;
    } else{
        return !true;
    }
}console.log(willBuyDrink(isHotOutside, moneyInPocket));  // this is used to test my code.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13.	Create a function of your own that solves a problem. 
// •	In comments, write what the function does and why you created it.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let thisWeeksTemps = [64, 52, 56, 54, 55, 44, 46];// arrays for question (13.)
let nextWeeksTemps = [65, 43, 55, 66, 77, 80, 73];// arrays for question (13.)
let testWeeksTemps = ["sour", "apples", "are", "gross"];// arrays for question (13.)
let tempSum = 0;
function averageWeeksTemp(array){  // This function lets you enter an array of temps into it and tell you what the average temp is outside for this week. (13.)
    let averageTemp = array.reduce(  // I made this function to be able to easily tell the average temp of the coming weeks.
        (previousValue, currentValue) => {
            return previousValue + currentValue;
        },
        tempSum
    ); array = averageTemp / array.length;
    if(array === array){
        return Math.floor(array);// Math floor rounds the average to a whole number so its not a decimal.
    } else {
        return ("beautiful!"); // this is here for when something thats not numbers is entered into the function this runs.
    }
}
                                                  // add three different arrays provided up above
console.log("This weeks average temperature is " + averageWeeksTemp(testWeeksTemps)); // this is used to test my code. there are 3 arrays above to be used to test with this function. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////