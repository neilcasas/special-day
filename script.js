const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const themeButton = document.querySelector('#toggle-theme');
const heroBG = document.querySelector('.hero-main');
const ctaBG = document.querySelector('.cta');
const root = document.documentElement;

root.className = 'light'; // initialize root theme to light

// yes button goes to yes webpage
yesButton.addEventListener('click', function () {
    window.location.href = './decisions/yes.html';
})

// change theme on button click
themeButton.addEventListener('click', function () {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    themeButton.textContent = themeButton.textContent === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
    toggleBackgrounds(newTheme);
});

// toggle between backgrounds in cta and hero
function toggleBackgrounds(theme) {
    heroBG.classList.toggle('dark', theme === 'dark');
    ctaBG.classList.toggle('dark', theme === 'dark');
}

let count = 0;

// change no button on count 
function noCount() {
    count++;
    if (count == 1) {
        noButton.textContent = 'wait dont click';
    } else if (count == 2) {
        noButton.textContent = 'no seriously dont';
    } else if (count == 3) {
        noButton.textContent = 'am I that worthless to you';
    } else if (count == 4) {
        noButton.textContent = 'i beg you dont click';
    } else if (count == 5) {
        noButton.textContent = ':(';
    }
}
noButton.addEventListener('click', function () {
    noCount();
    // direct to no.html
    if (count > 5) {
        window.location.href = './decisions/no.html';
    }
})