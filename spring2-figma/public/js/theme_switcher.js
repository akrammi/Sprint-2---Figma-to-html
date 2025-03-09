const themeController = document.querySelector('.switcher');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggleIcon() {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
}

function themeCheck() {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        toggleIcon();
    }
}

function switchTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        toggleIcon();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    toggleIcon();
}

themeController.addEventListener('click', switchTheme);

themeCheck();