/*
let ages = [3, 9, 23, 64, 2, 8, 28, 93];//   (1.)
ages.push(30,);//adds new number to end of the array dynamicly changes subtraction   (1b.)
let lastIndex = ages[ages.length - 1]; //finds the last index in the array and sets it into variable.  (1a.)
let firstIndex = ages[0];// sets first index in a variable.   (1a.)
let subIndex = lastIndex - firstIndex;// subtracts last index in array from first index in array.   (1a.)

console.log(subIndex);
let sum = 0;
let averageAge = 0;
for(i = 0; i < ages.length; i++){
    sum = sum + ages[i]; // adds the entire array into the sum variable. (1c.)
    averageAge = sum / ages.length; // takes the sum and divides it by the number of values in the array. (1c.)
}console.log(Math.floor(averageAge)); // logs the average age of the array and math.floor makes it into a whole number without decimals. (1c.)



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
console.log(concatName);
//////////////////////////////////
let orange = [2, 3, 4];
console.log(orange.length -1);  //  access last element of any array array.length -1;   (3.)
//////////////////////////////////
console.log(orange[0]); // access first element of an array  first element in an array is always zero index [0]; (4.)
//////////////////////////////////
let nameLengths = []; 
for(let i = 0; i < names.length; i++){ // loop that runs all names and puts them into the new array. (5.)
    nameLengths.push(names[i].length);
}
console.log(nameLengths);
let nameSumNames = 0;
for(let i = 0; i < nameLengths.length; i++){  // loop that calculates the sum of all elements in the array. (6.)
    nameSumNames = nameSumNames + nameLengths[i];
}
console.log(nameSumNames);
////////////////////////////////
function wordMultiplyer(word, n) {  //function takes in 2 parameters and spits out first one as a string and second one determines how manny it returns. (7.)
    let repeat = "";
    for(let i = 0; i < n; i++)
    repeat += word;
   return repeat;
} 

console.log(wordMultiplyer("Hello World", 3));
////////////////////////////////
function wholeName(firstname, lastname){ // Function that takes in two parameters and returns a full name (8.)
    return firstname + " " + lastname;
} console.log(wholeName("Geordan", "Daugherty"));
////////////////////////////////
 let sumOf = 0;
let apples = [4, 5, 6, 7, 4, 100];  // if you add to this array to make over 100 will check true if you go under 100 or too 100 it will mark false (9.)
function sumTrue(){
    for(let i = 0; i < apples.length; i++)
    sumOf += apples[i];
    console.log(sumOf)
    if (sumOf > 100){
        return true;
    }else{
        return false;
    }
}console.log(sumTrue());
///////////////////////////////
let unicorn = [5, 6, 7, 3, 6422, 6955]   
let unicornLen = unicorn.length;
let unicornSum = 0;
function averageApp(){  // Function that adds all values in the array then returns the average of the array. (10.)
    for(let i = 0; i < unicorn.length; i++)
        unicornSum = unicornSum + unicorn[i];
        return unicornSum / unicornLen;
    
} console.log(averageApp());
//////////////////////////////

let letters = [5, 4, 7, 7, 4, 445];
let lettersSum = 0;
let notes = [6, 6, 8, 3, 6, 70000];
let notesSum = 0;
let lettersAverage = 0;
let notesAverage = 0;

function averageArray(array1, array2){   // Function that takes in two arrays and finds the average of them and finds weather array1 is greater then array2. (11.)
    let sumWithInitial = letters.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        lettersSum
    ); array1 = sumWithInitial / letters.length;
    let notesWithInitial = notes.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        notesSum
    ); array2 = notesWithInitial / notes.length;

    if (array1 < array2){
        return true;
    } else{
        return !true;
    }
}console.log(averageArray(lettersAverage, notesAverage));
/////////////////////////////
function willBuyDrink(isHotOutside, moneyInPocket){  // function will return true if its hotoutside  & money in pocket is equal too or greater then set ammout it returns true. (12.) 
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return true;
    } else{
        return !true;
    }
}console.log(willBuyDrink(true, 10.50));  
////////////////////////////*/
let thisWeeksTemps = [64, 52, 56, 54, 55, 44, 46];
let nextWeeksTemps = [65, 43, 55, 66, 77, 80, 73];
let testWeeksTemps = ["sour", "apples", "are", "gross"];
let tempSum = 0;
let tempAv= 0;
function averageWeeksTemp(array){  // This function lets you enter an array of temps into it and tell you what the average temp is outside for this week. (13.)
    let averageTemp = array.reduce(  // I made this function to be able to easily tell the average temp of the coming weeks.
        (previousValue, currentValue) => {
            return previousValue + currentValue;
        },
        tempSum
    ); array = averageTemp / array.length;
    if(array === array){
        return Math.floor(array);
    } else {
        return ("beautiful!");
    }
}

console.log("This weeks average tempeture is " + averageWeeksTemp(testWeeksTemps));

