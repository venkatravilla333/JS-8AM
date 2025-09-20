

// console.log(window)
// console.log(window.localStorage)
// console.log(window.sessionStorage)

// var storeButton = document.getElementById('store')

// function storeFun() {
//   localStorage.setItem('name', 'sachin')
//   localStorage.setItem('age', 40)
// }

// storeButton.addEventListener('click', storeFun)

// var getButton = document.getElementById('get')

// var parent = document.getElementById('parent')

// function getFun() {
//   console.log(localStorage.getItem('name'))
//   console.log(localStorage.getItem('age'))
//   var name = localStorage.getItem('name')
//   var age = localStorage.getItem('age')
//   var para = document.createElement('p')
//   para.textContent = `Name: ${name}, Age: ${age}`
//   console.log(para)
//   parent.appendChild(para)
// }

// getButton.addEventListener('click', getFun)

// var deleteButton = document.getElementById('delete')

// function deleteFun() {
//   localStorage.removeItem('name')
//   localStorage.removeItem('age')
// }

// deleteButton.addEventListener('click', deleteFun)

// var removeButton = document.getElementById('remove')

// function removeFun() {
//   localStorage.clear()
  
// }

// removeButton.addEventListener('click', removeFun)


// ================================================================


var storeButton = document.getElementById('store')

function storeFun() {
  sessionStorage.setItem('name', 'sachin')
  sessionStorage.setItem('age', 40)
}

storeButton.addEventListener('click', storeFun)

var getButton = document.getElementById('get')

var parent = document.getElementById('parent')

function getFun() {
  console.log(sessionStorage.getItem('name'))
  console.log(sessionStorage.getItem('age'))
  var name = sessionStorage.getItem('name')
  var age = sessionStorage.getItem('age')
  var para = document.createElement('p')
  para.textContent = `Name: ${name}, Age: ${age}`
  console.log(para)
  parent.appendChild(para)
}

getButton.addEventListener('click', getFun)

var deleteButton = document.getElementById('delete')

function deleteFun() {
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('age')
}

deleteButton.addEventListener('click', deleteFun)

var removeButton = document.getElementById('remove')

function removeFun() {
  sessionStorage.clear()
  
}

removeButton.addEventListener('click', removeFun)