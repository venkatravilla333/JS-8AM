//How to create an Object

//object literal syntax

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// var person2 = {
//   name: 'kohli',
//   age: 35,
//   city: 'delhi',
//   play: function () {
//     console.log('play')
//   }
// }

//constructor function way ( ES-5 )

// function Test(name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.play = function () {
//     console.log('play')
//   }
// }
// var person1 = new Test('sachin', 40, 'mumbai')
// console.log(person1)
// var person2 = new Test('kohli', 35, 'delhi')
// console.log(person2)
// var person3 = new Test('dhoni', 38, 'ranchi')
// console.log(person3)

//classical way (ES-6)

// class test{
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }

// var person1 = new test('sachin', 40, 'mumbai')
// console.log(person1)
// var person2 = new test('kohli', 35, 'delhi')
// console.log(person2)
// var person3 = new test('dhoni', 38, 'ranchi')
// console.log(person3)

//objects are dynamic

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person1)

//access

// console.log(person1['name'])
// console.log(person1['age'])
// console.log(person1.city)
// console.log(person1.play)
// person1.play()

//add new properties

// console.log(person1)
// person1.color = 'red'
// person1.go = function () {
//   console.log('go')
// }
// console.log(person1)

//update old values

// person1.name = 'sami'
// console.log(person1)

//delete old properties

// delete person1.name
// delete person1.age
// delete person1.play

// console.log(person1)


//loops

var person1 = {
  name: 'sachin',
  age: 40,
  city: 'mumbai',
  play: function () {
    console.log('play')
  }
}

//without using loops

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// person1.play()


//with using loop

// console.log(person1)

// //for in loop

// // for (var key in person1) {
// //   console.log(key, person1[key])
// // }

// // keys

// var keys = Object.keys(person1)
// console.log(keys)

// //values
// var values = Object.values(person1)
// console.log(values)

// //entries
// var values = Object.entries(person1)
// console.log(values)

// import lodash from 'lodash'

// var lodash = require('lodash') //node js

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: function () {
//     console.log('play')
//   }
// }

// var copiedObj = originalObj //normal copy
// var copiedObj = Object.assign({}, originalObj) //shallow copy (ES-5)
// var copiedObj = {...originalObj} //shallow copy (ES-6)
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy


// copiedObj.name = 'kohli'
// copiedObj.address.road = 201
// console.log(originalObj)
// console.log(copiedObj)

//primitives

// var a = 10

// var b = a
// b = 20
// console.log(a)
// console.log(b)

//Math object

// console.log(Math)
// console.log(Math.min(10, 20, 15))
// console.log(Math.max(10, 20, 15))
// console.log(Math.ceil(10.1))
// console.log(Math.ceil(10.9))
// console.log(Math.floor(10.1))
// console.log(Math.floor(10.9))
// console.log(Math.round(10.5))
// console.log(Math.round(10.9))
// console.log(Math.round(10.4))
// console.log(Math.random()*100)
// console.log(Math.sqrt(25))
// console.log(Math.pow(3, 3))

//Date object

// var now = new Date()

//number format
// var now = new Date(2045, 11, 10, 10, 10, 10)

//string format
// var now = new Date('2050 11 15 10:10:10')

// console.log(now)

// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.setFullYear(2040)
// now.setMonth(7)
// console.log(now.getFullYear())
// console.log(now.getMonth())

//template string

//with out using template string (ES-5)

// var name = 'sachin'
// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)

// //with using template string

// console.log(`Hi this is ${name} my age is ${age}`)


// console.log(this)

// function test1 () {
//   console.log(this)
// }
// test1()

// var test2 = ()=> {
//   console.log(this)
// }
// test2()

// var person = {
//   name: 'sachin',
//   outer1: function () {
//     console.log(this)
//     var inner1 = function () {
//       console.log(this)
//     }
//     inner1()
//     var inner2 = ()=> {
//       console.log(this)
//     }
//     inner2()
//   },
//   outer2:  ()=> {
//     console.log(this)
//      var inner1 = function () {
//       console.log(this)
//     }
//     inner1()
//     var inner2 = ()=> {
//       console.log(this)
//     }
//     inner2()
//   }

// }

// person.outer1()
// person.outer2()


// function Test(name) {
//   console.log(this)
//   this.name = name;
//   this.outer1 = function () {
//     console.log(this)
//     var inner1 = function () {
//       console.log(this)
//     }
//     inner1()
//     var inner2 = ()=> {
//       console.log(this)
//     }
//     inner2()
//   };
//   this.outer2 = ()=> {
//     console.log(this)
//      var inner1 = function () {
//       console.log(this)
//     }
//     inner1()
//     var inner2 = ()=> {
//       console.log(this)
//     }
//     inner2()
//   }
// }

// var person = new Test('sachin')

// person.outer1()
// person.outer2()


class Test{
  constructor(name) {
    console.log(this)
    this.name = name;
    this.outer1 = function () {
      console.log(this)
      var inner1 = function () {
        console.log(this)
      }
      inner1()
      var inner2 = ()=> {
        console.log(this)
      }
      inner2()
    }
    this.outer2 =  ()=> {
      console.log(this)
      var inner1 = function () {
        console.log(this)
      }
      inner1()
      var inner2 = ()=> {
        console.log(this)
      }
      inner2()
    }
  }
}

var person = new Test('sachin')
person.outer1()
person.outer2()
