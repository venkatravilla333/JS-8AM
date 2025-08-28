

//How to define a function

// declaration

// function test() {
  
// }

// test()

// //expression

// var x  = function test() {
  
// }

// x()

// var y = function () {
  
// }

// var z = ()=>{
  
// }

//params vs arguments


// function test(a, b) { //params
//   console.log(a + b)
// }

// test(10, 20)//arguents

//default param (ES-6)

// function test(a = 10, b) { //params
//   console.log(a, b)
// }

// test()//arguents


// function test(a = 20, b=undefined) { //params
//   console.log(a, b)
// }

// test(10, undefined)//arguents

// varying on of params vs arguments

// function test() {
//   // var sum = a + b + c
//   // console.log(sum, typeof sum)
//   console.log(arguments, typeof arguments)
//   console.log(Array.isArray(arguments))
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])
// var sum = 0
//   for (var value of arguments) {
//     sum += value
//   }
//   console.log(sum)

// }
// test(1, 2, 3, 4, 5)

//ES-6 rest parameter

// var test = (...rest)=> {
 
//   console.log(rest, typeof rest)
//   console.log(Array.isArray(rest))
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])
//   var sum = 0

//   for (var value of rest) {
//     sum += value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)






//scope

//global

// var a = 1
// let b = 2
// const c = 3
// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   var d = 4
//   let e = 5
//   const f = 6
  
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {
//     var g = 7
//     let h = 8
//     const i = 9

//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
//   console.log(g)
//   console.log(h)
//   console.log(i)
//   }
//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }

// test()
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// var a = 10
// console.log(a)
// {
// var b = 20
// // console.log(a)
// console.log(b)
// }
// console.log(b)


//Hoisting

// console.log(a)
// let a = 'sachin'
// console.log(a)
// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)
// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = {
//   name: 'kohli'
// }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// // console.log(h)
// h()
// let h = function test() {
//   console.log('named function exp')
// }
// console.log(h)
// h()

// console.log(i)
// var i = function() {
//   console.log('anaymous function exp')
// }
// console.log(i)
// console.log(j)
// var j = function() {
//   console.log('arrow function exp')
// }
// console.log(j)

// console.log(declare)
// declare()
// function declare() {
//   console.log('function declaration')
// }
// console.log(declare)
// declare()