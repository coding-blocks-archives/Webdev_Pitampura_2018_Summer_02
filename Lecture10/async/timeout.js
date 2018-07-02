
let c = 0;

let id = setInterval(function () {
 console.log(c++)
}, 100)

setTimeout(function () {
  clearInterval(id)
}, 2000)


