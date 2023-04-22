const btn1 = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const imageMove = document.querySelector('.item1')

function showImage() {
	imageMove.classList.toggle('hide-show')
	if (imageMove.classList.contains('hide-show')) {
		arrowIcon.style.transform = 'rotate(180deg)'
	} else {
		arrowIcon.style.transform = 'rotate(0)'
	}
}

arrowIcon.addEventListener('click', showImage)
