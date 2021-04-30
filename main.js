let size = 18;
let row = "";
let chessboard = "";
let switchPattern =  true;
let switchCharacter = true;
let counter = 0;
 
while (counter < size){
    if (row.length != size) {
        if (switchPattern) {
            if (switchCharacter){
                row += "X";
            }
            if (!switchCharacter) {
                row += "O";
            }    switchCharacter = !switchCharacter;
        }
        if (!switchPattern) {
            if (switchCharacter) {
                row += "O";
            }
            if (!switchCharacter) {
                row += "X";
            }
            switchCharacter = !switchCharacter
        }
    } else {
        switchPattern = !switchPattern;
        chessboard += row + "\n";
        row = "";
        counter += 1;
    }}

console.log(chessboard)