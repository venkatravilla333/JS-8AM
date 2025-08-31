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

console.log(person1)

//for in loop

// for (var key in person1) {
//   console.log(key, person1[key])
// }

// keys

var keys = Object.keys(person1)
console.log(keys)

//values
var values = Object.values(person1)
console.log(values)

//entries
var values = Object.entries(person1)
console.log(values)

