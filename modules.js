const weekDay = function(){
    const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return {
        name(number){return names[number]},
        number(name){return names.indexOf(name)}
    };
}();

const x =1;

function evalAndReturnX(code){
    eval(code)
    return x;
}

let plusOne = Function("n","return n+1");
console.log(plusOne(12))

const ordinal = require("ordinals");
const {day, months} = require("date-names");
require(fsd)