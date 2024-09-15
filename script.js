
let w = window.innerWidth;
let h = window.innerHeight;


function onWindowResize() {
    w = window.innerWidth;
    h = window.innerHeight;
}

function switchToHomePage() {
    const loadingScreen = document.getElementById('loading-screen');
    const homePage = document.getElementById('home-page');
    
    if (homePage.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');  // Hide loading screen
        homePage.classList.remove('hidden');    // Show home page
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Start loading animation and set up event listeners
    const continueButton = document.getElementById("continue");
    continueButton.addEventListener("click", switchToHomePage);

    // Set a timeout to ensure the continue button appears after the loading animation
    setTimeout(() => {
        continueButton.classList.remove("hidden");
    }, 5000); // Adjust timing as necessary
});

window.addEventListener("resize", onWindowResize, false);


