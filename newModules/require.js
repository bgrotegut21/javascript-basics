require.cache = Object.create(null);

function require(name){
    if(!(name in require.cache)){
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}

const {parse} = require("ini");
console.log(parse("x=10\ny=20"))