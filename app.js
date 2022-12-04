const nightImg = document.getElementById('img_night');
const sunImg = document.getElementById('img_sun');
const darkButton = document.getElementById('dark__mode');
darkButton.addEventListener('change', () => {
        document.body.classList.toggle('dark__mode');
        if(darkButton.checked) {
            nightImg.style.display= 'initial';
            sunImg.style.display= 'none';
        } else {
            nightImg.style.display= 'none';
            sunImg.style.display= 'initial';
        }
})
