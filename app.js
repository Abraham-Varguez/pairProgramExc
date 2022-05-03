'use strict'

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


