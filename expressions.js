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


stripComments = function(string){
    return string.replace(/\/\/.*|\/\*[^]*?\*\//g, "")
}

/*  */
//javascript is awesome!
console.log(stripComments("1 + /*2 */3"))
console.log(stripComments("x = 10;//ujkljkl"))
console.log(stripComments("1 /*a*/ + /*b*/ 1"))

let label = "dea+h1[]rd";
let text = "This dea+h1[]rd is super annoying";
let escaped = label.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b(" + escaped + ")\\b",'gi');

console.log(text.replace(regexp, "_$1_"));

console.log(" word".search(/\S/));

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match)
console.log(pattern.lastIndex)

let input = "A string with 3 numbers in it... 42 and 88";
let number = /\b\d+\b/g;
let matched;

while (matched = number.exec(input)){
    console.log(`Found ${matched[0]} at ${matched.index}`)
}

function parseINI(string){
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)){
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line'" + line+ "'is not valid");
        }
    });
    return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
`))