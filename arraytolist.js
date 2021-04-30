const arrayToList = function(array){
    let lastObject = true;
    let list = {}
    let currentObject = {}
    console.log(array.length)
    for (let val = array.length -2; val > -1; val += -1){
        if (lastObject){
            currentObject = {
                value:array[val],
                rest:null
            };
            list.rest = currentObject;
            currentObject = list.rest;
        } else {
            list.rest = currentObject;
            currentObject.value = array[val];
            currentObject = list.rest
        }
        lastObject = false;
    }
    return list;
}

console.log(arrayToList([1,2,3]))