console.log("This is Ayush");
function greet(name, greetText = "Greetings from Javascript") {
    let name1 ="Name1"
    console.log(name + " is a good boy");
    console.log(greetText + " " + name);

}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    console.log("Function is returned");     //This line never execute (Unreachable code)

}

let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let greetText = "Good Morning";

greet(name, greetText);
greet(name1, greetText);
// let returnVal = greet(name2);
let returnVal = sum(1,2,3);
console.log(returnVal);
