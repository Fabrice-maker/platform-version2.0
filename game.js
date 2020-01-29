
window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	//let color = "red"
	if (colorIndex > 0.25 && 0.50) {
		color = "blue"
    }
	if (colorIndex < 0.25) {
		color = "green"
	}
	if (colorIndex > 0.50 ) {
		color = "red"
    }
	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let width = Math.random() * canvas.width
	let height = Math.random() * canvas.height
  	new Shape(x, y, width, height).draw()
})