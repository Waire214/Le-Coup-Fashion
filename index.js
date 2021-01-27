const a = 1;
const b = new String("Hello World");
const c = "Alexa";
const d = c.length;
const e = c.toUpperCase();
const f = c.charAt(3);
const g = c.indexOf("A");
const h = c.lastIndexOf("e");
const i = c.includes("a");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
const concatenation = "Hello".concat(" ", "World", "!");
console.log(concatenation);
const repeat = "Hello".repeat(2);
console.log(repeat);
const templateLiterals = `Tosin ${concatenation}`;
console.log(templateLiterals);
const number1 = 42;
console.log(typeof number1);
console.log(Number.isInteger(42));
//alert("I am learning JavaScript and I'm excited to have you here");
let person = {
    firstName: 'Oluwatosin',
    middleName: 'Oghenewaire',
    lastName: 'Thompson',
    fullName: function() {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
};
console.log(person.fullName());
var text;
text = "<h1>" + person.fullName() + "</h1>";
console.log(text);
document.getElementById("demo1").innerHTML = text;
let arrNum = [10, 20, 30, 40, 50];
console.log(arrNum);
console.log(arrNum.join(", "));
console.log(arrNum.toString());
let arrNum2 = [30, 100, 40, 250, 870];
console.log(arrNum2.sort(function (a,b) {
    return a - b
})); 
let arrNum1 = [410, 20, 130, 540, 1050];
console.log(arrNum1.sort(function(a,b){return b-a}));
let arrNum3 = [2410, 120, 130, 3540, 61050];
console.log(arrNum3.sort(function(){return 0.5 - Math.random()}));
//Fisher Yakes method - random array sorting
function arrSortingRandom() {
    let points = ["A", "B", "C", "D", "E"];
    let j, k;
    for (let i = points.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        k = points[i];
        points[i] = points[j]
        points[j] = k;
        console.log(points);
        console.log(i);
    }
}
 arrSortingRandom();   
let arr = ["red", "green", "yellow", "indigo"];
for(let i = 0; i < arr.length; i++){ 
    let k = Math.floor(Math.random() * 3)
    console.log(arr[k])
    console.log(arr);
} // I can't explain why it's inclusive of 3 but I'm guessing it's because it's an array.
//String sorting
let textString = "Oghenewaire";
let textRandom = Math.floor(Math.random() * 10);
let texting = textString[textRandom];
console.log(texting);
//Maximum and minimum array
function arrMax(arr){
    console.log(Math.max.apply(null, arr));
}
arrMax([1,2,3]);
function arrayMax(arr) {
    let len = arr.length;
    var max = -Infinity;
    while(len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    console.log(max);
}
arrayMax([1,2,3,4,5]);
//sorting object arrays
let cars = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010}
];
cars.sort(function (a,b) {
    console.log(a.year - b.year);
});
let textWrite = "";
let num1 = ["is 4","is 5","is 6","is 7"];
num1.forEach(myEachFunc);
function myEachFunc(value, num1){
    textWrite = "<p>This number " + value + "</p>";
    console.log(num1);
    console.log(textWrite);
}
myEachFunc();
//get today's date
function today(format){
    format = new Date();
    const days = format.getDate();
    const months = format.getMonth() + 1;
    const years = format.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(today());
function newExercise(x,y) {
    if(x === 100 || x + y === 100){
        return true;
    }else{
        return false;
    }
}
console.log(newExercise(49,51));

//get the extension of a filename.
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.html"));
function addNew(str) {
    if(str.indexOf("New!") !== 0){
        let x = `New! ${str}`
        return x;
    }else{
        return str;
    }
}
console.log(addNew("It is new."));
console.log(addNew("New!, yay"));

function removeAddStrings(str) {
    if (str.length < 3){
        return str;
    }else{
    return str.slice(0,3) + str.slice(-3);
    }
}
console.log(removeAddStrings("The living of"));
console.log(removeAddStrings("The"));
console.log(removeAddStrings("of"));

function halfString(str){
    if (str.length % 2 === 0){
        let x = str.length / 2;
       return str.slice(0,x);
    }else{
        return "Not even";
    }
}
console.log(halfString("1234567"));
console.log(halfString("123456"));
function removeFirstCharacter(str1,str2){
    return `${str1.slice(1)} ${str2.slice(1)}`;
}
console.log(removeFirstCharacter("The", "She"));
console.log(removeFirstCharacter("SJS", "SNINJA"));

function closeTo100(x, y){
   if (100 - x > 100 - y){
       return `${x} is farther away from 100 compared to y`;
   }else if (100 - x === 100-y){
       return `${x} and ${y} are equal`
   }else{
       return `${y} is closer to 100 than ${x}`
   }
}
console.log(closeTo100(10, 15));
console.log(closeTo100(50, 50));

function occurrences(str, ch){
    let x = str.split("");
    let y = x.filter(value => value === ch);
    y.length;
    if (y.length >= 2 && y.length < 5) {
        return true;
    }else{
        return false;
    }
}
console.log(occurrences("actually", "a"));
console.log(occurrences("actually", "y"));
console.log(occurrences("oooooh", "o"));

function myArrays(arr){
    let y = arr.filter(myFunction);
    function myFunction(value){
        return value % 2 === 0;
    }
    return y.length;
}
console.log(myArrays([2,4,6,8,9]));
console.log(myArrays([1,3,5,7,9]));

function anArray(num){
    const generatedArray = [];
    for (let i = 1; i <= num; i += 1){
        generatedArray.push(i);
    }
    let y = generatedArray.filter(myFunction);
    function myFunction(value) {
    return value % 2 === 0;
    }
    return y.length;
}
console.log(anArray(6));

function sortingArrays(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] < arr[i]){
            return "Falseeeee!";
        }else{
            return "Ascending!";
        }
    }
}
console.log(sortingArrays([5,4,3,6]));  

function largestEvenNumber(arr) {
let y = arr.filter(myFunction);
function myFunction(value) {
    return value % 2 === 0;
}
return Math.max.apply(null,y);
}
console.log(largestEvenNumber([40,20,50,90,120,200]));
console.log(largestEvenNumber([440,20,50,90,120,200]));

function leapYear(year){
    if (year % 4 === 0) {
        return "leap year";
    }else{
        return "Not a  leap year";
    }
}
console.log(leapYear(2020));

const objA ={
    a : 1,
    b : 2,
    c : 1
};
const objB ={
    a : 1,
    b : 1,
    c : 1
};
const objC ={
    a : 1,
    b : 1,
    d : 1
};
function objectEqual(a, b) {
    Object.keys(a).every(myFunction);
    function myFunction(key){
        return key === Object.keys(b);
    }
}
console.log(objectEqual(objA, objC));