// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

let exp1=4 > 3
console.log(`4 > 3 is ${exp1}`)
let exp2=4 >= 3
console.log(`4 >= 3 is ${exp2}`)
let exp3=4 < 3
console.log(`4 < 3 is ${exp3}`)
let exp4=4 <= 3
console.log(`4 <= 3 is ${exp4}`)
let exp5=4 == 4
console.log(`4 == 4 is ${exp5}`)
let exp6=4 === 4
console.log(`4 === 4 is ${exp6}`)
let exp7=4 != 4
console.log(`4 != 4 is ${exp7}`)
let exp8=4 !== 4
console.log(`4 !== 4 is ${exp8}`)
let exp9=4 != '4'
console.log(`4 != '4' is ${exp9}`)
 let exp10=4 == '4'
 console.log(`4 == '4' is ${exp10}`)
let exp11=4 === '4'
console.log(`4 === '4' is ${exp11}`)

//     - Find the length of python and jargon and make a falsy comparison statement.
let str1='python'
let str2='jargon'
let result =str1.length != str2.length
console.log(result)