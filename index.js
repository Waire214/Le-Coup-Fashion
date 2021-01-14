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
alert("I am learning JavaScript and I'm excited to have you here");
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
