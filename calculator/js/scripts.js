function  saySomething(whatToSay) {
    window.alert(whatToSay);
}

function add(number1, number2) {
    return number1 + number2;
}

const result = add(3, 5);
const outputText = "The sum is " + result + ".";
saySomething(outputText);

function add(number1, number2) {
    return number1 + number2;
}
window.alert(add(10,5));

const additionResult =add(10,5);
window.alert(additionResult);

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));