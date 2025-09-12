

// var parent = document.getElementById('parent')
// var child = document.getElementById('child')
// var subchild = document.getElementById('subchild')


// function parentFun(e) {
//   console.log('parent')
//   console.log(e)
//   // e.stopPropagation()
// }

// parent.addEventListener('click', parentFun, true)

// function childFun(e) {
//   console.log('child')
//   console.log(e)
// }

// child.addEventListener('click', childFun, true)

// function subChildFun(e) {
//   console.log('subchild')
//   // e.stopPropagation()
//   console.log(e)
//   console.log(e.target)
//   console.log(e.clientX)
//   console.log(e.clientY)
//   console.log(e.offsetX)
//   console.log(e.offsetY)
//   // e.preventDefault()
// }

// subchild.addEventListener('click', subChildFun, true)


var table = document.getElementById('table')

function tableFun(e) {
  console.log('clicked')
  console.log(e)
  console.log(e.target)
}

table.addEventListener('click', tableFun)