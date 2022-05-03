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



//Hard

