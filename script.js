function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);
      
}