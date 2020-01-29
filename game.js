
window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	//let color = "red"
	if (colorIndex > 0.10 && 0.30) {
		color = "blue"
    }
	if (colorIndex < 0.10) {
		color = "green"
	}
	if (colorIndex > 0.30 && 0.6) {
		color = "red"
    }
    if (colorIndex > 0.60 ) {
		color = "cyan"
    }
	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let width = Math.random() * canvas.width
	let height = Math.random() * canvas.height
  	new Shape(x, y, width, height).draw()
})