function imgSlider(whatever) {
    document.querySelector('.pepsi').src = whatever;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}