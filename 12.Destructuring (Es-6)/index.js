

// var person = {
//   name: 'sachin',
//   age: 40,
//   // properties: [{cash: 100000}, {bats: 10}, {cars: 20}]
//   // properties: [{cash: 100000, bats: 50}]
//   properties: {cash: 100000, bats: 50}
// }

//without

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.properties[0].cash)
// console.log(person.properties[1].bats)
// console.log(person.properties[2].cars)

//with

// var { name, age, properties:[{cash}, {bats}, {cars}] } = person
// var { name, age, properties:[{cash, bats}] } = person
// var { name, age, properties: {cash, bats} } = person
// console.log(name)
// console.log(age)
// console.log(cash)
// console.log(bats)
// console.log(cars)


// var arr = ['sachin', 40, ['kohli'], {cash: 100000}]

// without

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2][0])

//with

// var [name1, age, [name2]] = arr
// var [name1, age, [name2], {cash}] = arr

// console.log(name1)
// console.log(age)
// console.log(name2)
// console.log(cash)