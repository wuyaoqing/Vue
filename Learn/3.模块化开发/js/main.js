//------------按需导入------------
// import {name, age, gender,test} from './info.js'
// console.log(name, age, gender)
// test('调用info的test方法')

//------------导入所有------------
// import * as info from './info.js'
// console.log(info.age, info.name, info.gender)
// info.test('调用info的test方法')

//------------推荐：export default-----------
// import info2 from './info2.js'
// console.log(info2.name)
// info2.say('2022');

 
 //------------export{}-------------
 import {firstName, multiply} from './infotest.js'
 console.log(firstName);
 console.log(multiply(10,20));
 
