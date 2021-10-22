// 1. leap year
const leapYear = [1974, 1900, 1985, 2000];
for(let i = 0; i < leapYear.length; i++) {
    if (leapYear[i] % 4 === 0)
    console.log(leapYear[i])
}

// 2.factorial of 7
let factorialOfSeven = 1;
for (let i=1; i<=7; i++) {
    factorialOfSeven *= i;
}
console.log(factorialOfSeven);

// 3. the sum of odd numbers
const items = [1,6,23,8,4,98,3,7,3,98,4,98];
let oddSum = 0;

for (let i = 0; i < items.length; i++) {
    if(items[i] % 2 !== 0) {
        oddSum +=items[i];
    }
}
console.log(oddSum);

// 4. Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
let highest = 0;
let lowest = 0;

for (let i = 0; i < items.length; i++) {
    if(i === 0) {
        highest = items[i];
        lowest = items[i];
    }
    if (items[i] > highest) {
        highest = items[i];
    }
    if (items[i] < lowest) {
        lowest = items[i];
    }
}
console.log(`the highest ${highest}, the lowest ${lowest}`);

// 5. Choose longest string from the array. 
// [‘Karol’,‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

const names = ["Karol", "Adam","Rogowski","Politechnika", "Super", "Weekend"];

let theLongest = "";
for (let i = 0; i < names.length; i++) {
    if (names[i].length > theLongest.length) {
        theLongest = names[i];
    }
}
console.log(theLongest);

// 6. Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
let indexes = [];
for (let i = 0; i < items.length; i++) {
    if(items[i] === highest) {
        indexes.push(i);
    }
}
console.log(indexes);

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let evenSum = 0;
let evenNumber = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
        evenSum += items[i];
        evenNumber++
    }
}

console.log(`Average value: ${evenSum/evenNumber}`);

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number.
let evenIndexesSum = 0;
let evenIndexesNumber = 0;
for (let i = 0; i < items.length; i++) {
    if ( i !== 0 && i % 2 === 0) {
        evenIndexesSum += items[i];
        evenIndexesNumber ++;
    }
}
console.log(`Average values at even indexes ${evenIndexesSum/evenIndexesNumber}`);

// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones.

let value = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
        value += items[i];
    } else {
        value -= items[i];
    }
}
console.log(value);