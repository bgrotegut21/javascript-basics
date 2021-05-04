const reduce = function(arrays, combination,start){
    let current = start;
    for(let element of arrays){
        console.log(current);
        current = combination(current,element)
    }
    return current;
}

let randomArray = [[12,15,7,5,43,3,42],[1,3,4,3,4,5,7,9,0],[0,-1,-2]];

flattenArray = reduce(randomArray, (number, element) => number.concat(element),[]);

console.log(flattenArray)

const loop = function(element,condition,increment, log){
    let value = element;
    tableArray = [];
    const loopMachine = function(){
        if(!condition(element)){
            return element;
        } else {
            tableArray.push(element);
            element = increment(element);
            loopMachine()

        }
    }
    loopMachine();
    for(let item of tableArray){
        log(item);
    }

}
loop(2,n => n <11, n => n+1,console.log);

const every = function(array,test){
    let isTrue = true;
    for (let item of array){
        if(!test(item)){
            isTrue = false;
            break;
        }
    }
    return isTrue;
}

const everySome = function(array,conditional){
    let isTrue = true;
    array.some(element => {
        console.log(element);
        if (!conditional(element)){
            isTrue = false;
        }
    })
    return isTrue;
}

console.log(everySome([],n => n <10))

