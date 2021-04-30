
const lessThan = function(n){
    return m => m<n;
}

function greatest(num){
    return (...numbers) => {
        console.log("calling",...numbers);
        let result = num(...numbers);
        console.log("called with",...numbers,", returned", result);
        return result;
    }
}

function unless(test,then) {
    if(!test){
        then();
    }
    
};

function repeat(number, func){
    for (let i = 0;i<number;i++){
        func(i +1);
    };
};
list = [];
repeat(5, direction => {
    unless(direction %2 == 1,() =>{
        console.log("is even",direction);
    });
    unless(direction %2 == 0, () => {
        console.log("is odd",direction);
    });
});

repeat(5, addToList => {
    list.push(`Section ${addToList}`)
});

console.log(list)

array1 = [1,9,6]

array1.forEach(nums => console.log(nums))