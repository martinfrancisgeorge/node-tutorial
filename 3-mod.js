//modules every file in nod is a module
const names=require('./4-names')
const sayHi=require('./5-utils')
const check=require('./6-alternative');
require('./7-minegranade')
console.log(check)

 sayHi('susan');
 sayHi(names.john);
 sayHi(names.peter);
