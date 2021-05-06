let rabbit = {};
rabbit.speak = function(line){
    console.log("the rabbit says"+ line);
}


function speak(){
    console.log("oh fairwell" + this.type);
}

rabbit = {type:" greg", speak};
rabbit.speak();
console.log(rabbit.speak(" hello"));

function normalize(){
    console.log(this.coords.map(n => n/this.length))
}

normalize.call({coords:[15,2,3,4,5],length:15});

let empty = {};
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);


let person = {
    talk(line)  {
        console.log(line + "is doing" + this.type);
    }
}

function makeRabbit(type){
    let rodd = Object.create(person)
    rodd.type = type;
    return rodd
}

function Person(type){
    this.type = type;
}
Person.prototype.talk = function(line){
    console.log(this.type + "is doing" + line )
};

let rodd = new Person("epic");
rodd.talk("jo");
console.log(rodd.type)

class Shark {
    constructor(type){
        this.type = type;
    }
    fate(){
        if (this.type == "friendly"){
            console.log("ths shark is very friendly and wants to be your friend")
        } else {
            console.log("this shark will tear you to pieaces")
        }
    }
}

friendlyShark = new Shark("friendly");
angryShark = new Shark("angry")
friendlyShark.fate();
angryShark.fate();
Shark.prototype.teeth = "sharpy";
friendlyShark.teeth = "nice and pointy"
console.log(friendlyShark.teeth)
console.log(angryShark.teeth)

console.log([1,3].toString())

console.log(Object.prototype.toString.call([1,2]))

let ages = {
    Boris:39,
    Liang:22,
    Julia:62,
}
console.log("julia is ages" + ages["Julia"])
console.log("Is jacks age known", "Jack" in ages)
console.log("is toString's age known?", "toString" in ages)

let age = new Map();

age.set("Joe",25);
age.set("Lia",32);
age.set("Jerry",62);

console.log("Joe is "+ age.get("Joe"))
console.log("Does Jerry exist "+ age.has("Jerry"))
console.log(age.has("toString"))

Shark.prototype.toString = function(){
    return "a "+ this.type + " shark";
};

console.log(String(angryShark));

let sym = Symbol("cool");

const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function(){
    return this.length + "cm of yarm"
}
console.log([1,4].toString())
console.log([1,2][toStringSymbol]())

let stringObject = {
    [toStringSymbol](){return "epic";}
}
console.log(stringObject[toStringSymbol]())

let okIterator = "12345"[Symbol.iterator]();
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())


class Matrix{
    constructor(width,height, element = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];
        for(let x = 0; x < this.width; x++){
            for(let y = 0; y < this.height; y++){
                this.content[y * width + x] = element(x,y)
            }
        }
        console.log(this.content);
    }
    get(x,y){
        console.log(this.content[y* this.width + x] , "content")
        return this.content[y* this.width +x];
    }
}

class MatrixIteration{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next(){
        if (this.y == this.matrix.height) return {done:true};
        let value = {x:this.x,y:this.y,value:matrix.get(this.x, this.y)}
        this.x ++;
        if (this.x == this.matrix.width){
            this.y ++;
            this.x = 0;
        }
        return {value, done:false};
    }
}


Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIteration(this);
}

let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`);

for (let {x,y,value} of matrix){
    console.log(x,y,value);
}

class SymetricMatrix extends Matrix{
    constructor(size, element = (x,y) => undefined){
        super(size,size, (x,y) => {
            if (x < y) return element(y, x);
            else return element(x, y)
        });
    }
    set(x,y,value) {
        super.set(x,y, value);
        if (x != y){
            super.set(y, x, value);
        }
    }
}

let matrix2 = new SymetricMatrix(5, (x,y) => `${x},${y}`)
console.log(matrix2.get(2,3))

class Simple{
    s
}