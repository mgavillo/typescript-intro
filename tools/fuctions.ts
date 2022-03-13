function add(n1: number, n2: number) : number{
    return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num:number) => void){
    const result = n1 + n2;
    console.log(cb(result))
}

function printResult(num:number){
    console.log("Result: " + num)
}

printResult(add(5, 12));

let combinedValues : (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8))

addAndHandle(3, 4, (num) => {return num})