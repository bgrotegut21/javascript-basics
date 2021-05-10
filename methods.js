
map = {one:true, two:true, hasOwnProperty: false}

Object.prototype.stringValue = function(object){
    objectValues = Object.values(object);
    stringOfObjects = ""
    for(let item of objectValues){
        stringOfObjects += String(item) +" ,"
    }
    return stringOfObjects;
}
console.log(stringValue(map));