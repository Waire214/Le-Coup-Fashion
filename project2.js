//Access Each Buttons. Turn the number buttons and operation buttons to arrays.
//const allbuttons = Array.from(document.getElementsByTagName("button"));
//console.log(allbuttons);
const numBtns = Array.from(document.getElementsByClassName("num"));
console.log(numBtns[0].innerText);
const optBtns = Array.from(document.querySelectorAll(".operation"));
const equalsBtn = document.querySelector(".equal");
const acBtn = document.querySelector(".ac");
const delBtn = document.querySelector(".del");
const outputsA = document.getElementById("ouput1");
const outputsB = document.getElementById("output2");
numBtns.forEach(value => {value.addEventListener("click", () => {
    console.log(value.innerText);
    calculator.appendNumber(value.innerText);
    calculator.updateDisplay();
})})

/*const calculator = new Calculator(outputsA,outputsB);

optBtns.forEach(value => {value.addEventListener("click", () => {
    calculator.chooseOperation(value.innerText);
    calculator.updateDisplay();
})})
equalsBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})
acBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})
delBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})*/