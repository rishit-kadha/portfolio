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

function startLoadingBar() {
    const brand = document.getElementById("brand");
    if (brand) {
        brand.classList.add('loading');  // Start the loading animation
    }
}

window.addEventListener("DOMContentLoaded", () => {
    startLoadingBar();  // Trigger loading bar animation when page loads

    const continueButton = document.getElementById("continue");
    
    // Ensure the button only appears after 5 seconds (5000ms)
    setTimeout(() => {
        continueButton.classList.remove('hidden');  // Show the continue button after loading
    }, 5000);  // Adjust this to match the loading bar duration

    continueButton.addEventListener("click", switchToHomePage, false);
});

window.addEventListener("resize", onWindowResize, false);


