let userInput: unknown;
let userInput1: any;
let userName: string;

userInput = "Max";
userInput= 5;
if (typeof userInput === 'string'){
    userName = userInput;
}

userName= userInput1;


function generateError(message: string, code: number) : never{
    throw {message:message, errorCode: code};
}
console.log("wsh alooooors")

function infinite() : never{
    while(true){}
}

generateError('An error occurred!', 500);
