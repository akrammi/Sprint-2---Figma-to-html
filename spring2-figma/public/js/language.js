let select = document.querySelector('.languages');
let selectSideMenu = document.querySelector('.languages-side');

select.addEventListener('change', () => {
    window.location.href = select.value;
});

selectSideMenu.addEventListener('change', () => {
    window.location.href = selectSideMenu.value;
});