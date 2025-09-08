
// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


//How to add new items to array

// //starting
// arr.unshift(0)
// console.log(arr)

// //ending
// arr.push(6)
// console.log(arr)

// //anywhere

// arr.splice(0, 0, 'Hi')
// arr.splice(arr.length, 0, 'Bye')
// arr.splice(2, 0, 'Hello')
// console.log(arr)


//How to remove array items

//staring
// arr.shift()
// console.log(arr)

//ending
// arr.pop()
// console.log(arr)

//anywhere

// arr.splice(0, 1)
// arr.splice(arr.length-1, 1)
// arr.splice(3, 2)
// console.log(arr)

//How to remove all items from array

// arr = []
// arr.length = 0
// arr.splice(0, arr.length)
// console.log(arr)

//Finding of array items

// var arr = [1, 3, 2, 4, 5, 2]
// var arr = [{course: 'react'}, {course: 'javascript'}, {course: 'html'}, {course: 'react'}]

//Primitives

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))


// Reference

// var res = arr.find((obj) => {
//   return obj.course === 'java'
// })

// console.log(res)

// var res = arr.findIndex((obj) => {
//   return obj.course === 'react'
// })

// console.log(res)

// var res = arr.findLastIndex((obj) => {
//   return obj.course === 'react'
// })

// console.log(res)


//How to merge 2 or more arrays into one array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = [6, 7, 8, 9, 10]

// console.log(arr1)
// console.log(arr2)

// var combineArr = arr1.concat(arr2) //ES-5
// var combineArr = [...arr1, ...arr2] //ES-6
// console.log(combineArr)


//How to loop array values

// without using loop

var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[4])

// for (var value of arr) {
//   console.log(value)
// }

//  arr.forEach((value, index) => {
//   console.log(value*2)
//   // return value
// })

//Copy

// var a = 10

// var b = a
//  b = 20

// console.log(a)
// console.log(b)

// import lodash from 'lodash'
// var lodash = require('lodash')

var originalArr = ['sachin', { road: 101 }, function () { }]


// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = lodash.cloneDeep(originalArr) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy(ES-5)
// var copiedArr = [...originalArr] //shallow copy(ES-6)
// var copiedArr = originalArr.slice() //shallow copy(ES-6)

// copiedArr[0] = 'kohli'
// copiedArr[1].road  = 201
// console.log(originalArr)
// console.log(copiedArr)

// var arr = [1, 2, 3, 4, 5]

// console.log(arr, typeof arr)

// var str = arr.join('*')
// console.log(str, typeof str)

// var myarr = str.split()

// console.log(myarr, typeof myarr)


// var arr = [1, 2, 3, 4, 5]
// var arr = [{name: 'sachin', age : 45}, {name: 'gill', age: 22}, {name: 'kohli', age: 35}]

// var filteredRes = arr.filter((value) => {
// return value > 3
// })
// var filteredRes = arr.filter((object) => {
// return object.age > 30
// })

// console.log(arr)
// console.log(filteredRes)


// var arr = [1, 2, 3, 4, 5]


// var mappedRes = arr.map((value) => {
//  return  value * 100
// })

// console.log(arr)
// console.log(mappedRes)


// var arr = [1, 2, 3, 4, 5]

// var reducedRes = arr.reduce((cum, cur) => {
//    console.log(cum, cur)
// }, 100)
// // console.log(arr)
// // console.log(reducedRes)









