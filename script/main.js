let offset = 0;
const btn = document.querySelector('.section2_button'),
      sliderLine = document.querySelector('.slider_line');

btn.addEventListener('click', () => {
    offset += 1088;
    if (offset > 3264) {
        offset = 0;
    } 
    sliderLine.style.left = -offset + 'px';
});
