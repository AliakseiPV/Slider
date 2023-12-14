function createButtons(slideCount) {
	const buttonContainer = document.querySelector('.switch-buttons')
	for (let i = 0; i < slideCount; i++) {
		const button = document.createElement('button')
		button.setAttribute('slide-button', i)
		button.className = 'switch-button'
		buttonContainer.appendChild(button)
	}
}

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;


createButtons(slideCount)
const switchBtn = document.querySelectorAll('.switch-button')

switchBtn.forEach(button => {
	button.addEventListener('click', () => {
		slideIndex = +button.getAttribute('slide-button')
		updateSlider(slideIndex, slides);

		highlightButton(button)
	})
})

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider(slideIndex, slides);
}

function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider(slideIndex, slides);
}

function highlightButton(selectedButton) {
	switchBtn.forEach(btn => {
		if (btn.classList.contains('active') && btn !== selectedButton) {
			btn.classList.remove('active')
			btn.style.background = 'rgba(0, 0, 0, 0.1)'
		}
	})
	
	if (!selectedButton.classList.contains('active')) {
		selectedButton.classList.add('active')
		selectedButton.style.background = 'rgba(0, 0, 0, 0.4)'
	}
}

function updateSlider(slideIndex, slides) {
	const button = document.querySelector(`[slide-button="${slideIndex}"]`)
	slides.forEach((slide, index) => {
		if (index === slideIndex) {
			slide.style.display = 'block';
			highlightButton(button)
		} else {
			slide.style.display = 'none';
		}
	});
}


updateSlider(slideIndex, slides);
console.log()
