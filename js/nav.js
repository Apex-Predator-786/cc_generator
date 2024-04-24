
var root = document.querySelector(':root');
var moon = document.querySelector(".fa-moon");
var sun = document.querySelector(".fa-sun");

function navmoon() {
    moon.style.display = "none";
    sun.style.display = "inline";
    // Set dark mode styles to match the color of the moon
    root.style.setProperty('--color-2', '#282c34'); // Dark slate gray for text
    root.style.setProperty('--color', '#c0c0c0'); // Silver for background text
    root.style.setProperty('--navbg', '#191d24'); // Darker shade for navbar
    root.style.setProperty('--body-bg', '#101317'); // Almost black for body background
    root.style.setProperty('--mdiv-bg', '#191d24'); // Darker shade for main div background
    root.style.setProperty('--btn-color', '#c0c0c0'); // Silver for button text
    root.style.setProperty('--btn-bg', '#282c34'); // Dark slate gray for button background
    root.style.setProperty('--btn-hover', '#c0c0c0'); // Silver for button hover text
    root.style.setProperty('--btn-bg-hover', '#3c4049'); // Slightly lighter gray for button hover background
    root.style.setProperty('--moon', '#77bcd1'); // White for moon icon
    root.style.setProperty('--sun', '#ffeb3b'); // Yellow for sun icon
}

function navsun() {
    moon.style.display = "inline";
    sun.style.display = "none";
    // Set light mode styles with a softer yellow
    root.style.setProperty('--color-2', '#333333'); // Dark gray for text
    root.style.setProperty('--color', '#000000'); // Black for background text
    root.style.setProperty('--navbg', '#ffffff'); // White for navbar
    root.style.setProperty('--body-bg', '#fff9db'); // Soft yellow for body background
    root.style.setProperty('--mdiv-bg', '#ffffff'); // White for main div background
    root.style.setProperty('--btn-color', '#000000'); // Black for button text
    root.style.setProperty('--btn-bg', '#fff9db'); // Soft yellow for button background
    root.style.setProperty('--btn-hover', '#000000'); // Black for button hover text
    root.style.setProperty('--btn-bg-hover', '#fffbea'); // Lighter yellow for button hover background
    root.style.setProperty('--moon', '#77bcd1'); // White for moon icon
    root.style.setProperty('--sun', '#ffeb3b'); // Original yellow for sun icon
}


