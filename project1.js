//Assign elements using DOM
const outputs = document.getElementById("output1");
const answers = document.getElementById("output2");
const decimal = document.querySelector(".deci");
const buttons = Array.from(document.getElementsByTagName("button"));
buttons.map(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "AC":
                outputs.innerText = "";
                answers.innerText ="";
                break;
            case "DEL":
                if (outputs.innerText) {
                    outputs.innerText = outputs.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    answers.innerText = eval(outputs.innerText);
                } catch {
                    answers.innerText = "Error";
                }
                break;
            default:
                outputs.innerText += e.target.innerText;
                break;
        }
    })
})