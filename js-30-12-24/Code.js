


let rate = 82;

if (rate < 50) {
    document.write('Fail');
}
else if (rate > 50 && rate < 59) {
    document.write('E');
}
else if (rate > 60 && rate < 69) {
    document.write('C');
}
else if (rate > 70 && rate < 79) {
    document.write('D');
}
else if (rate > 80 && rate < 89) {
    document.write('B');
}
else if (rate > 90 && rate < 100) {
    document.write('A');
}

document.write('<br><br><br>');


// let x = 250 ;
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %;


let x = 5000;
let Zakat;

if (x >= 4000) {
    Zakat = x * 0.025;
    document.write("Zakat : " + Zakat);
}


document.write('<br><br><br>');


// Array Tasks :
// 1
// Correct the syntax error
// let arr1 = [1, 7, 9, 45,];


// let arr2 = ["Str", "alex", "moh", 'the', 'fox', 'over', 'lazy', 'dog',];


// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

//Banana = 1
//Tomato = 0


// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)

// let Food = ["Mansaf", "grape leaves", "Rice"];

// let Sport = ["Tennis", "Soccer", "Riding a bike"];

// let Movie = ["Escape Plan", "The Hunger Game", "300"];


/*
4
Create a Variable to return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// let firstOfArray1 = [1, 4, 5];

// let First = firstOfArray1[0];

// let firstOfArray2 = ["t", "u", "g", "x"];

// let FirstChar = firstOfArray2[0];



/*
5
Create a Variable to return the lastOfArray element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


// let lastOfArray1 = [1, 4, 5];
// let LastNum = lastOfArray1[lastOfArray1.length - 1];

// let lastOfArray2 = ["t", "u", "g", "x"];
// let LastChar = lastOfArray2[lastOfArray2.length - 1];


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


// var array = [0, 5, 7, 9];

// array.shift();
// array.shift();
// array.shift();

// array.unshift(8);
// array.unshift(6);
// array.unshift(4);
// array.unshift(3);
// array.unshift(1);

// array.push(10);


// document.write(array);
// document.write('<br><br><br>')


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// let NewArr = [];

// NewArr.push(3.5);
// NewArr.push(-7);
// NewArr.unshift(9);
// NewArr.unshift(5);

// document.write(NewArr);
// document.write('<br><br><br>');

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/


// var arry1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arry1.sort();

// document.write(arry1);
// document.write('<br><br><br>');






// 10.
// Write a JS code to print a pattern using for loop

//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5
//    1 2 3 4 5 6
//    1 2 3 4 5 6 7
//    1 2 3 4 5 6 7 8


for (let i = 1; i <= 8; i++) {

    let j = "";
    for (let x = 1; x <= i; x++) {
        j += x;
    }

    console.log( j);
 
}


// //Problem Solving....Factory

// let Sum = 1;
// let Factory = 6;

// for (let i = Factory; i > 0; i--) {


//     Sum *= i;

// }

// document.write('<br><br><br><br>');
// document.write(Sum);