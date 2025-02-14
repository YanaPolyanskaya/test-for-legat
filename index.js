const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const openGalleryButton = document.getElementById('openGalleryButton');
const gallery = document.getElementById('gallery');

let slideIndex = 0;
const slideWidth = slides[0].offsetWidth;

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

showSlide(slideIndex);
openGalleryButton.addEventListener('click', () => {
    openGallery();
});
function openGallery() {
    if (gallery.style.display === 'none') {
        gallery.style.display = 'flex';
    } else {
        gallery.style.display = 'none';
    }
}