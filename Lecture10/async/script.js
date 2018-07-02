window.onload = function () {
  let start = document.getElementById('start')
  let count = document.getElementById('count')
  let counter = document.getElementById('counter')
  let message = document.getElementById('message')

  let c = 0
  start.onclick = function () {
    let start = new Date().getTime()
    setTimeout(function () {
      message.innerText = "END"
    }, 5000)

  }

  count.onclick = function () {
    c++
    counter.innerText = c
  }
}