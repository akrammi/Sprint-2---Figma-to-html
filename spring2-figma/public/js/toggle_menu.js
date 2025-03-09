const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

window.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
        sideMenu.classList.remove('open');
    }
});
