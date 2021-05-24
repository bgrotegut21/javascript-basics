class InputError extends Error {};

function promptDirection(question){
    let result = prompt(question)
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid Direction: " + result); 
}

for(;;) {
    try {
        let dir = proptDirection("Where?");
        console.log("You chose", dir);
        break;
    } catch(err){
        if (err instanceof InputError){
            console.log("Not a valid direction try again")
        } else {
            console.log("oops")
            throw err
        }
    }
}