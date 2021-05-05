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
