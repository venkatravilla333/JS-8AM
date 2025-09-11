//How to read dom properties

// console.log(document)
// console.dir(document)
// console.dir(document.URL)
// console.dir(document.all)
// console.dir(document.links)
// console.dir(document.forms)
// console.dir(document.title)
// console.dir(document.doctype)

//how to access dom nodes into js file

//id

// var para1 = document.getElementById('one')
// console.log(para1)
// para1.innerText = 'updated'

// class

// var para = document.getElementsByClassName('one')
// console.log(para)
// console.log(para[0])

//tagname

// var para = document.getElementsByTagName('p')
// console.log(para)

//query selector

// var para = document.querySelector('#one')
// var para = document.querySelector('.one')
// var para = document.querySelector('p')
// console.log(para)

//query selector all

// var para = document.querySelectorAll('#one')
// var para = document.querySelectorAll('.one')
// var para = document.querySelectorAll('p')
// console.log(para)

//traversing of dom

// var currentElement = document.getElementById('current')
// console.log(currentElement)
// currentElement.style.background = 'red'

// var parent = currentElement.parentElement

// console.log(parent)
// parent.style.background = 'green'

// var preSib = currentElement.previousElementSibling
// console.log(preSib)

// preSib.style.background = 'black'
// preSib.style.color = 'white'


// var nextSib = currentElement.nextElementSibling
// console.log(nextSib)
// nextSib.style.background = 'red'
// nextSib.style.color = 'yellow'

// var firstChild = currentElement.firstElementChild
// console.log(firstChild)
// firstChild.style.background = 'yellow'
// firstChild.style.color = 'red'

// var lastChild = currentElement.lastElementChild
// console.log(lastChild)
// lastChild.style.background = 'green'
// lastChild.style.color = 'yellow'

// var allChilds= currentElement.children
// console.log(allChilds)
// allChilds[0].style.background = 'red'
// allChilds[1].style.background = 'red'
// allChilds[2].style.background = 'red'
// allChilds[0].style.color = 'yellow'
// allChilds[1].style.color = 'yellow'
// allChilds[2].style.color = 'yellow'

// for (var element of allChilds) {
//   element.style.background = 'green'
//   element.style.color = 'white'
//   element.style.width = '300px'
//   element.style.height = '300px'
// }

//How to arttach events to dom elements

// var button = document.getElementById('btn')
// console.log(button)

// function btnClick() {
//   console.log('clicked')
// }

// button.addEventListener('click', btnClick)

//DOM MANIPULATION (ADD, UPDATE, DELETE)

//ADDING

// var para = document.createElement('p')
// console.log(para)

// para.innerText = 'This is para'

// var parent = document.getElementById('parent')
// console.log(parent)

// parent.appendChild(para)

// var h1 = document.createElement('h1')
// console.log(h1)

// h1.innerText = 'This is heading'

// parent.appendChild(h1)
// parent.insertBefore(h1, para)

// var parent = document.getElementById('parent')

// var para = document.createElement('p')
// para.innerText = 'This is para'

// function addFun() {
// parent.appendChild(para)
// }
// var button = document.getElementById('add')

// button.addEventListener('click', addFun)


// //Replace

// var h4 = document.createElement('h4')

// h4.innerText = 'Heading four'

// var replaceBtn = document.getElementById('replace')

// function replaceFun() {
//   parent.replaceChild(h4, para)
  
// }

// replaceBtn.addEventListener('click', replaceFun)

// //Delete

// var deleteBtn = document.getElementById('delete')


// function deleteFun() {
//   // h4.remove()
//   parent.removeChild(h4)
// }

// deleteBtn.addEventListener('click', deleteFun)















