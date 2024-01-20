const yesButton = document.querySelector('.yes');
const themeButton = document.querySelector('#toggle-theme');
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
});