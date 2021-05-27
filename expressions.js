let reg = new RegExp("abc");
let reg2 = /abc/;
let eighteenPlus = /eighteen\+/;

/123/.test("1263434");
/[0-9]/.test("1234532");
/[0123456789]/.test("in 2004");

let datetime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
datetime.test("2004-08-21 06:20");
datetime.test("2004-8-21 6:20");

let nonbinary = /[^01]/;
nonbinary.test("10100101012");

/\S+/.test('"avc"');

/'\d*'/.test("'123'");

let w = /w?erd/;
w.test("weerd");


date = /\d{1,4}-\d{1,2}-\d{1,2} \d{1,2}:\d{2}/;

testDate = date.test("2004-8-21 6:21");




let ghostCrying =  /boo+(hoo)+/i;
let ghostTest = ghostCrying.test("boooooooooohooooooooooooooooo");


let quotedText = /'([^']*)'/;
let quotedTexts = quotedText.exec("how are you doing 'sir'");


oldDate = new Date(2011,11,9,20,20,10);

function dateString (string){
    let [_, year, day, month] = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(string);
    return new Date(year, month-1, day);
}

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/

animalCountTest = animalCount.test("15 chicken")

console.log("kaykaykay".replace("k","g"))

console.log("Borobudur".replace(/[ou]/,"a"));
console.log("Borobudur".replace(/[ou]/g,"a"));

console.log("kaykay".replace(/k/g,"g"))


nuString = "John Smith Allen Sun".replace(/(\w+) (\w+)/g, "$2 $1")
console.log(nuString)

uCase = "this is awesome and epic".replace(/(awesome|epic)/g, s => s.toUpperCase())

console.log(uCase)

let stock = "12 lemon, 23 cabbages, and 101 eggs";
function minusOne (match, amount,unit){
    amount = Number(amount) -1
    if (amount == 0){
        amount = "no";
    } else if (amount == 1){
        unit.slice(0,unit-1)
    }
    return amount + " "+ unit;
}
console.log(stock.replace(/(\d+) (\w+)/g,minusOne))


function stripComments(code){
    return code.replace(/\/\/.*|\/\*[^]*\*\//g,"");
}
//javascript is awesome!
console.log(stripComments("1 + /*2 */3"))
console.log(stripComments("x = 10;//"))
console.log(stripComments(""))

c