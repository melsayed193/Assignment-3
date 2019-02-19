// Interacting

// Zoom in car
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}
// Partial eclipse on hover
var car = document.querySelector('.car')

car.addEventListener('mouseenter', showLights)
car.addEventListener('mouseleave', hideLights)

function showLights() {
	car.classList.add('lights')
}

function hideLights() {
	car.classList.remove('lights')
}