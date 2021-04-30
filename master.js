const power = function(number,power = 0){
    let counter = 0;
    let anwser = number;
    if (power == 0){
        return 1;
    } else {
        while (counter < power){
            anwser *= counter;
            counter += 1;
        }
        return anwser;
    }
};
js
