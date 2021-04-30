const deepComparison = function(value1, value2){
    isTrue = true;
    valueKeys1 = Object.keys(value1);
    valueKeys2 = Object.keys(value2);
    
    const deepEqual = function(value1, value2) {

        valueKeys1 = Object.keys(value1);
        valueKeys2 = Object.keys(value2);
        counter = 0;
        for (let key of valueKeys1) {
            if (key != valueKeys2[counter]){
                isTrue = false;
                break;
            }
            counter ++;
        }
        if (isTrue) {
            for (let item of valueKeys1){
                if (value1[item] != value2[item]) {
                    if (typeof value1[item] == "object" && value1[item] != null) {
                        if (typeof value2[item] == "object" && value2[item] != null) {
                            deepEqual(value1[item],value2[item]);
                        } else {
                            isTrue = false;
                        }

                    } else {
                        isTrue = false;
                    }

                }
            }
        }
    }
    if (value1 == value2){
        return isTrue;

    } else if (valueKeys1.length == valueKeys2.length){

        counter = 0;
        for (let key of valueKeys1){
            
            if (key != valueKeys2[counter]){
                isTrue = false;
                break;
            }

            counter ++;
        }
        console.log(counter);
        console.log(valueKeys1);
        console.log(valueKeys2);
        if (isTrue) {
            for (let item of valueKeys1){
                if (value1[item] != value2[item]) {
                    if (typeof value1[item] == "object" && value1[item] != null){
                        if (typeof value2[item] == "object" && value2[item] != null){
                            deepEqual(value1[item],value2[item]);
                        } else {
                            isTrue = false;
                        }
                    } else {
                        isTrue = false;
                    }
                }
            }
        }
    } else {
        isTrue = false;
    }
    return isTrue;
}

  let list2 = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
        rest:1
      }
    }
  };

  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
        rest:3
      }
    }
  };

let obj = {here: {is: "an", value: {something:"text"}}, object: 2};
let obj2 = {here: {is: "an", value: {something:"text"}}, object: 2};
console.log(deepComparison([1,3,5],[1,3,4]))