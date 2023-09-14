//npm local dependancy npm i <packageName>
//npm global dependancy npm install ~g <packageName>
//sudo npm install ~g <packageName>

const lok =require('lodash')

const items=[1,[2,[3,[4]]]];
const newItem = lok.flattenDeep(items)
console.log(newItem)