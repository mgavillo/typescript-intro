"use strict";
let userInput;
let userInput1;
let userName;
userInput = "Max";
userInput = 5;
if (typeof userInput === 'string') {
    userName = userInput;
}
userName = userInput1;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("wsh alooooors");
function infinite() {
    while (true) { }
}
generateError('An error occurred!', 500);
