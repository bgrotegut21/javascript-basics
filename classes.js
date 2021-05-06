let averageSize = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
};

let randomThing = {
    get greeted(){
        console.log("Hello rodd")
    }
}
randomThing.greeted;

class Temp{
    constructor(celcius){
        this.celcius = celcius;
    }
    get farenheight(){
        return this.celcius * 1.8 + 32
    }
    set farenheight(value){
        this.celcius = (value - 32)/ 1.8
    }
    static fromFarenheight (value){
        return new Temp((value -32/ 1.8))
    }
}

let temp = new Temp(32);
console.log(temp.farenheight)

console.log(Temp.fromFarenheight(100))

class Bike {
    constructor(size){
        this.size = size;
    }
    present(){
        console.log(this.size)
    }
}

class MotorBike extends Bike {
    constructor(size, model){
        super(size);
        this.model = model;
    }
    present(){
        console.log(`This bike is a ${this.model} and a ${this.size}`)
    }
}

bike = new Bike("small")
bike.present(
)

motorBike = new MotorBike("big", "Harley Davidson")
motorBike.present()

console.log( new MotorBike instanceof Bike)
console.log(new Bike instanceof MotorBike)