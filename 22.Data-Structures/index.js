

// var obj = {}

// var myMap = new Map()

// var myweakMap = new WeakMap()




// var obj = {
//   name: 'sachin',
//   age: 40,
  
// }

// var myMap = new Map([ [ 'one', 1 ], [ 'two', 2 ] ])


//add new properties

// var obj = {
//   name: 'sachin',
//   age: 40,
// }

// obj.city = 'mumbai'

// console.log(obj)

// var myMap = new Map([['name', 'sachin'], ['age', 40]])

// let user1 = { name: "Alice" };

// myMap.set(user1, 'user1')

// user1 = null

// console.log(myMap.get(user1))

// console.log(myMap)

//get values

// console.log(obj['name'])
// console.log(obj['age'])

// console.log(myMap.get('name'))
// console.log(myMap.get('age'))


// how to check specific key is there

// console.log('age' in obj)
// console.log(obj.hasOwnProperty('height'))
// console.log(myMap.has('age'))

// how to delete specific key

// delete obj.city

// console.log(obj)

// myMap.delete('city')
// console.log(myMap)

// how to delete all keys

// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     delete obj[key];
//   }
// }

// obj = {}

// console.log(obj)


// myMap.clear()

// console.log(myMap)

// how to find length

// console.log(Object.keys(obj).length);
// console.log(myMap.size);

// how to convert

// var resMap = new Map(Object.entries(obj))

// console.log(resMap)

// var resObj = Object.fromEntries(resMap)

// console.log(resObj)


// how to destructure

// var { name, age } = obj

// console.log(name)
// console.log(age)

// var [name1, age, city ] = myMap
// console.log(name1)
// console.log(age)
// console.log(city)

//weakMap

// let wm = new WeakMap();

// let user = { name: "Alice" };
// wm.set(user, "Logged In");

// console.log(wm.get(user)); // "Logged In"

// user = null; // The entry is now eligible for garbage collection

// console.log(wm.get(user))


//array vs set vs weakset

// var arr = ['apple', 'banana', 'apple']
// console.log(arr)

// console.log(arr.includes('apple'))

// arr.pop()


// console.log(arr)
// console.log(arr.length)

// let set = new Set();

// console.log(set)

// set.add("apple");
// set.add("banana");
// set.add("apple"); // Ignored — already in the set

// console.log(set)

// console.log(set.has('apple'))
// set.delete('apple')
// console.log(set)

// console.log(set.size)


// let ws = new WeakSet();

// // console.log(ws)


// let obj = { name: "test" };


// ws.add(obj);

// obj = null;

// console.log(ws)

// ws.delete(obj)
// // console.log(ws.has(obj)); // true
// console.log(ws)





    
  


