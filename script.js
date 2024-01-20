const yesButton = document.querySelector('.yes');

// yes button goes to yes webpage
yesButton.addEventListener('click', function () {
    window.location.href = './decisions/yes.html';
})

function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}