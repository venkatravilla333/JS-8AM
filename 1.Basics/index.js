

//primitives

var a = 'sachin'
console.log(a, typeof a)

var b = 20
console.log(b, typeof b)

var c = false
console.log(c, typeof c)

var d 
console.log(d, typeof d)

var e = null
console.log(e, typeof e)

//reference

var f = {
  name: 'sachin',
  age: 40,
  play: function () {
    console.log('play')
  }
}

console.log(f, typeof f)
// console.log(f['name'])
// console.log(f['age'])
// f.play()


var g = [1, 2, 3, 'sachin', true, { age: 40 }]
console.log(g, typeof g)
// console.log(g[0])
// console.log(g[1])
// console.log(g[2])
// console.log(g[3])
// console.log(g[4])
// console.log(g[5])


// var products = [
//   {name: 'apple', price: 100},
//   {name: 'banana', price: 500},
//   {name: 'grape', price: 150},
//   {name: 'orange', price: 200}
// ]

// console.log(products)
// console.log(products[0].name)
// console.log(products[0].price)
// console.log(products[1].name)
// console.log(products[1].price)
// console.log(products[2].name)
// console.log(products[2].price)
// console.log(products[3].name)
// console.log(products[3].price)

//function

// function test() {
  
// }

// var x = function test() {
  
// }

// var y = function () {
  
// }


// var z = ( ) => {
  
// }

var test1 = () => {
  var x = 10
}
console.log(test1, typeof test1)

// function test2() {
//  var y = 20
// }
// test2() //function calling
