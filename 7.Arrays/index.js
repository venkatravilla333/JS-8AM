
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






