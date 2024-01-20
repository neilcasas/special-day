const darkMode = document.querySelector('#dark-mode');

// Function to toggle between dark mode and light mode
function toggleDarkMode() {
    const rootElement = document.documentElement;
    rootElement.classList.toggle('dark-mode');
}

// Event listener for the dark mode toggle button
darkMode.addEventListener('click', toggleDarkMode);
