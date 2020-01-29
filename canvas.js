let canvas = document.getElementById("display")

console.log(canvas)

canvas.width = document.body.clientWidth
canvas.Height = document.body.clientHeight
let ctx = canvas.getContext("2d")

ctx.fillStyle = "red"
ctx.fillRect(
  -200,
  200,
  400,
  100
 )

/*ctx.fillStyle = "cyan"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height / 2)
ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width / 2, canvas.height)
ctx.fillStyle = "red"
ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)
*/