// Playing with Variables
var a = 4;
console.log("4 / 3 gives a decimal number: " + (a / 3));

var b;
console.log("b was never set so it is: " + b);

var c = "47";
c +=  3;
console.log("when you add a '47' to 3 you get: " + c);

var d = 473;
console.log("Is 473 === '473?: " + (c === d));
console.log("Is 473 == '473?: " + (c == d));




// Conditionals, Loops, Objects, and Arrays
var arr = [];                   // make an empty array
for (var i = 0; i < 10; ++i) {  // in a for loop go from 0 to 9
    arr.push(i * 2);            // for each item in the array, set it to 2 * it's index
}
console.log("The array's size is: " + arr.length);
console.log("The item at index 4 in the array is: " + arr[4]);
arr.push('hi');   // add an item to the array, notice it isn't a number
var combined = arr.join(' ');
console.log("The whole array is: " + combined);

var coder = {     // create an object called coder with a name, age, speak method, and languages.
    name: "giovanni",
    age: 34,
    speak: function () {},
    languages: [
        'Javascript',
        'Java',
        'C++'
    ]
};
for (var j = 0; j < coder.languages.length; ++j) { // display all the languages
    console.log(coder.languages[j]);
}
if (coder.age < 10) { // if the coder is younger than 10 display a message
    console.log('you\'re a youngin');
} else {  // otherwise display a different message
    console.log('Code long and prosper my friend.');
}
var joey = {    // create two other objects
    name: 'joey',
    age: 10
};
var nathan = {
    name: 'nathan',
    age: 14
};            // add those two objects as the coders kids
coder.kids = {
    'kid-1': joey,
    kid2: nathan
};
console.log("Coder's first kid is: " + JSON.stringify(coder['kid-1']));
coder.speak(); // call the coder's speak method




// functions
var fib = function (num) {    // the recursive fibonacci function
    if (num < 2) {
        return num;
    }
    return fib(num - 1) + fib(num - 2);
};
console.log("The tenth fibonacci number is " + fib(10));

var saySomething = function (something) { // a function that will log something to the console
    console.log(something);
};
var doStuff = function (action, text) { // a function that takes a function and calls it with text as the parameter
    action(text);
};
doStuff(saySomething, "Hi Guys"); // call doStuff with saySomething and "Hi Guys"
