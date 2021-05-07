class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    get length (){

        return Math.sqrt(this.x**2 + this.y**2)
    }
}

Vec.prototype.plus = function(vector){
    this.x += vector.x;
    this.y += vector.y;
    let newVector = new Vec(this.x, this.y)
    return newVector;
}

Vec.prototype.minus = function(vector){
    this.x += -vector.x;
    this.y += vector.y;
    let newVector = new Vec(this.x, this.y);
    return newVector;
}

let firstVec = new Vec(3,4);


console.log(firstVec.length)