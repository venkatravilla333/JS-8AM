

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


//var vs let vs const

//scope

//hoisting

//redeclaration

// var a = 10
// console.log(a)
// console.log(a)
// console.log(a)
// // var a = 20
// const a = 20
// console.log(a)
// console.log(a)
// console.log(a)

//re-assignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)
// a = 20
// console.log(a)

//initialization

// var a
// let a
// const a = 10
// console.log(a)

// var a = 1
// console.log(a)
// function test() {
//   // console.log(a)
//   let a = 10
//   console.log(a)
// }
// test()
// console.log(a)

//closure

// function outer() {
//   var a = 100
//  return function inner() {
//     console.log(a)
//   }
  
// }

// var inner = outer()
// inner()

// let a = 10

// (function test() {
//   var a = 10
//   console.log(a)
// })()
// console.log(a)


// //without curry

// function test(a,b,c) {
//   console.log(a + b + c)
// }

// test(10, 20, 30)

// //with curry

// function funA(a) {
//   return function funB(b){
//     return function funC(c) {
//       console.log(a + b + c)
      
//      }
//   }
// }
// funA(10)(20)(30)
// // var funB = funA(10)
// // var funC = funB(20)
// // funC(30)

//without curry

// function calDis(price, dis) {
//   var disAmout = price * dis
//   console.log(disAmout)
// }

// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)

// //with curry

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmout = price * dis
//     console.log(disAmout)
//   }
// }
// var calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)

//FCF

// var a = function test(cb) {
//   console.log(cb)
//   return function hello() {
    
//   }
// }
// a(function cb(){})

//HOF

// function a(b) {
//   console.log('fun a')
//   b()
//   function c() {
//     console.log('fun c')
//   }
//   c()
// }
// a(function b() {
//   console.log('fun b')
// })

//pure vs impure

// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }
// pure(10, 20, 30)

// function impure(a, b, c) {
//   var d = Math.random()*10
//   console.log(a + b + c + d)
  
// }
// impure(10,20,30)


//function recursion


// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);