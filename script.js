const yesButton = document.querySelector('.yes');
const themeButton = document.querySelector('#toggle-theme');
const root = document.documentElement;

root.className = 'light';

// yes button goes to yes webpage
yesButton.addEventListener('click', function () {
    window.location.href = './decisions/yes.html';
})

function toggleTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

themeButton.addEventListener('click', toggleTheme);