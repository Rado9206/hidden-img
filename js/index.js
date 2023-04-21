const arrowIcon = document.querySelector('.fas')
const btn1 = document.querySelector('.arrow')
const imageMove = document.querySelector('.item1')

function showImage() {
	imageMove.classList.toggle('show')
	if (imageMove.classList.contains('show')) {
		arrowIcon.style.transform = 'rotate(180deg)'
	} else {
		arrowIcon.style.transform = 'rotate(0deg)'
	}
}

arrowIcon.addEventListener('click', showImage)
