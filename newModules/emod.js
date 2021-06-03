import ini from "ini";

let iniContent = "name=Vasilis\n[adress]\ncity=Tes";

let content =ini.parse(iniContent);

console.log(content);