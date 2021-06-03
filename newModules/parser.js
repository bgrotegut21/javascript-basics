require("ini")
let iniContent = "name=Vasilis\n[adress]\ncity=Tes";
const {parse} = require("ini");
console.log(parse(iniContent))