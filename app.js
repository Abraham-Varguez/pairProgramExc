'use strict'
//Easy1

function countingEvenOdd(arr, arrSize){
let evenCount = 0;
let oddCount = 0;

for(let x= 0; x < arrSize; x++){

    if (arr[x] & 1 == 1)
    oddCount++;
    
    else evenCount++;
}
console.log("number of even elements " + evenCount + " number of odd elements " + oddCount);
}
let arr = [22, 33, 44, 55, 66];
let n = arr.length;
countingEvenOdd(arr, n);
//stop here

// Easy (2)
// The For Loop
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function numPrime(num) {
    for (let i = 2; num > i; i++)
        if (num % i == 0) {
            return false;
        }

    return num > 1
}

console.log(numArray.filter(numPrime))
console.log(numArray2.filter(numPrime))

//Medium (1)
let vowelChecker = (letter) => {


    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        console.log(`This a Vowel`)
    } else {
        console.log(`This is not a Vowel`)
    }
}

vowelChecker('a')
vowelChecker('b')

// Mediun (3)
//The While Loop
function gcd2Numbers(x, y) {
    x = Math.abs(x)
    y = Math.abs(y)
    while (y) {
        let z = y;
        y = x % y;
        x = z;
    }
    return x;
}

console.log(gcd2Numbers(336, 360))
console.log(gcd2Numbers(78, 126))
//stop here

//medium 2

function isAnagram(str1,str2){
    let p1 = str1.length;
    let p2 = str2.length;
    //!= checks whether two values are not equal and return a boolean value
    if (p1 != p2)
    return false;
//.sort sorts both strings
    str1.sort();
    str2.sort()

    for(let t = 0; t < p1; t++)
    if (str1[t] != str2[t])
    return false;
    return true;

}
let str1 = ["Hi I'm pete"]
let str2 = ["dogs eat ants"]

if (isAnagram(str1, str2))
console.log("the two strings are" + "anagram of each other");

else console.log("the two strings are not" + " anagram of each other ");

//stop here

//Medium 2

const car = {

    make: 'Honda',
    model: 'civic',
    year: '2022',
    mileage: 10000,
    color: 'black',
    driveToWork: function () {
        console.log(this.mileage + 33)
    },
    driveAroundTheWorld: function () {
        console.log(this.mileage + 24000)
    },
    runErrands: function () {

    }
}
car.driveToWork()
car.driveAroundTheWorld()



//Hard


function areBracketsBalanced(expr) {


    let array = [];

    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {


            array.push(x);
            continue;
        }


        if (array.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = array.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = array.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = array.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (array.length == 0);
}

let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");


