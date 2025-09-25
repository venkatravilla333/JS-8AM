
console.log(window)

// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.setTimeout)
// console.log(window.setInterval)
// console.log(window.clearTimeout)
// console.log(window.clearInterval)

// window.alert('Hi how are you')
// var data = window.prompt()

// if (data) {
//   console.log(data)
// } else {
//   console.log('no data')
// }

// var res = window.confirm()

// if (res) {
//   console.log(res)
// } else {
//   console.log(res)
// }

var openBtn = document.getElementById('open')

var win 

function openNewWinFun() {
win =  window.open('','', "width=500,height=100")
}

openBtn.addEventListener('click', openNewWinFun)

var closeBtn = document.getElementById('close')

function closeWinFun() {
  win.close()
}

closeBtn.addEventListener('click', closeWinFun)

var moveBtn = document.getElementById('move')

function moveWinFun() {
  win.moveTo(400, 0)
}

moveBtn.addEventListener('click', moveWinFun)

var resizeBtn = document.getElementById('resize')

function resizeWinFun() {
  win.resizeTo(400, 600)
}

resizeBtn.addEventListener('click', resizeWinFun)


//document obj

// console.log(window.document)
// document.createElement()
// document.getElementById()
// document.title

//navigator

// console.log(window.navigator)
// console.log(window.navigator.appName)
// console.log(window.navigator.platform)
// console.log(window.navigator.onLine)
// console.log(window.navigator.language)

//screen obj

// console.log(window.screen)
// console.log(window.screen.width)
// console.log(window.screen.height)

//location obj

// console.log(window.location.pathname)
// console.log(window.location.hostname)
// console.log(window.location.port)
// console.log(window.location.href)
// console.log(window.location.protocol)

// var loadBtn = document.getElementById('load')

// function loadNeDocFun() {
//   window.location.assign("https://www.youtube.com")
// }

// loadBtn.addEventListener('click', loadNeDocFun)

var forwardBtn = document.getElementById('forward')

function forwardFun() {
  window.history.go(1)
}

forwardBtn.addEventListener('click', forwardFun)