class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a,b){
    let anwser;
    function checkPrimitiveMultiply(){
        try {
            anwser = primitiveMultiply(a,b);
        } catch(error){
            if(error instanceof MultiplicatorUnitFailure){
                return checkPrimitiveMultiply()
            } else {
                throw err;
            }
        }
    }
    checkPrimitiveMultiply()
    return anwser;
}

