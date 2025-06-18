// Function to toggle dark and light themes.
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    // Toggle the 'dark-theme' class on the body element
    body.classList.toggle('dark-theme');

    // Change the theme button text to represent the theme
    if (body.classList.contains('dark-theme')) {
        themeButton.value = '☀️'; // Set to sun icon for dark mode
    } else {
        themeButton.value = '🌙'; // Set to moon icon for light mode
    }
}

