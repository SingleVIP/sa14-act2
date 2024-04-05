const box = document.getElementById('box');
const animateButton = document.getElementById('animateButton');

let isAnimating = false;

animateButton.addEventListener('click', function() {
    if (!isAnimating) {
        box.style.transform = 'translate(300px, -50%)';
        isAnimating = true;
    } else {
        box.style.transform = 'translate(0, -50%)';
        isAnimating = false;
    }
});
