// Get the dark mode toggle button and icon
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Check user preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkMode();
} else if (savedTheme === 'light') {
    disableDarkMode();
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeIcon.src = 'assets/icons/brightness-high-fill.svg'; // Change icon to sun
    localStorage.setItem('theme', 'dark');
}

// Disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeIcon.src = 'assets/icons/moon-fill.svg'; // Change icon to moon
    localStorage.setItem('theme', 'light');
}