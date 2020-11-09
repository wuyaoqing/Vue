// import {name, age, gender} from './info.js'
// console.log(name, age, gender)

import * as info from './info.js'
console.log(info.age, info.name, info.gender)
info.test('aaaa')

// import aaa from './info2.js'
// console.log(aaa)

import anyname from './info2.js'
 console.log(anyname)
 
 
 //测试
 // import {firstName, lastName, year} from './infotest.js'
 // console.log(firstName);
 
 import * as infotest from './infotest.js'
 console.log(infotest.multiply(5,2));
 console.log(infotest.firstName);