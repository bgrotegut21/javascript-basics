function spotError(){
    "use strict";
    let a = 3;
    console.log(a)
}



function numberToString(n, base = 10){
    let result = '', sign = "";
    if (n < 0){
        sign = "-"
        n = -n
    } do {
        result = String(n % base) + result;
        n = Math.floor(n/base)
        console.log(n) 

    } while (n > 0){
        return sign+result;
    }
}
console.log(numberToString(13,10))

function promptNumber(question){
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}

function promptDirection(question){
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result)
}
function look() {
    if (promptDirection("Which way?") == "L"){
        return "a house";

    } else {
        return "two angry bears";
    }
}


const accounts = {
    a:100,
    b:0,
    c:20
};

function getAccount(){
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`)
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount
}


function transfer2(from, amount){
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress ==1) {
            accounts[from] += amount
        }
    }
}

transfer2("a",20);


function agreed (terms){
    let anwser = prompt(terms)
    if (anwser == "y") return "agreed";
    if (anwser == "n") return "not agreed";
    throw new  Error("Invalid anwser: "+ anwser);
}

let message = "Do you agree to the terms of service";



function nextPrompt(){
    try{
        let agree = agreed(message)
        if (agree == "agreed"){
            return "welcome to the serice";
        } else {
            return "sorry you cannot join our service";
        }
    } catch(error){
        return "Invalid response: " + error 
    } finally {
        "if you have any questions call 80942809"
    } 
}
