

// var obj = {}
// var arr = []

// console.log(arr)
// console.log(arr.map(()=>{}))
// console.log(Object.getPrototypeOf(arr))
// console.log(arr.__proto__)
// console.log(Array.prototype)

// var arrayBase = Object.getPrototypeOf(arr)

// console.log(arrayBase)

// var objectBase = Object.getPrototypeOf(arrayBase)
// console.log(objectBase)

// var a = {}
// console.log(a)
// var b = {}
// console.log(b)

// var a = []
// console.log(a)
// var b = []
// console.log(b)
// console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b))


// function test() {
  
// }

// var obj1 = new test()
// var obj2 = new test()
// console.log(obj1)
// console.log(Object.getPrototypeOf(obj1))
// console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2))

// var testBase = Object.getPrototypeOf(obj1)
// console.log(testBase)

// var objectBase = Object.getPrototypeOf(testBase)
// console.log(objectBase)


// var obj = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai'
// }

// var objectbase = Object.getPrototypeOf(obj)

// console.log(Object.getOwnPropertyDescriptor(objectbase, 'toString'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'age'))

// obj.name = 'kohli'
// delete obj.age
// console.log(obj)

// for (var key in obj) {
//   console.log(key)
// }

// Object.defineProperty(obj, 'age', {
//   configurable: true,
//   enumerable: false,
//   writable: true
// })


// delete obj.age

// console.log(obj)

// for (var key in obj) {
//   console.log(key)
// }


var obj = {
  name: 'sachin',
  age: 40,
  city: 'mumbai',
  go: function () {
    console.log('go')
    play()
  }
}

Object.prototype.play = function () {
  console.log('play')
  // this.go()
}


// obj.play()
// obj.go()

// var keys = Object.keys(obj)

// for (var keys in obj) {
//   console.log(keys)
// }

// console.log(keys)





