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
let textString = "Oghenewaire";
let textRandom = Math.floor(Math.random() * 10);
let texting = textString[textRandom];
console.log(texting);