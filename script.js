
let w = window.innerWidth;
let h = window.innerHeight;


function onWindowResize() {
    w = window.innerWidth;
    h = window.innerHeight;
}

function switchToHomePage() {
    const loadingScreen = document.getElementById('loading-screen');
    const homePage = document.getElementById('home-page');
    const body =document.body;
    
    if (homePage.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');  // Hide loading screen
        homePage.classList.remove('hidden');  
        body.classList.remove('noscroll')  // Show home page
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top on page reload
    window.scrollTo(0, 0);
    // Start loading animation and set up event listeners
    const continueButton = document.getElementById("continue");
    continueButton.addEventListener("click", switchToHomePage);
    const body =document.body;
    body.classList.add('noscroll');

    // Set a timeout to ensure the continue button appears after the loading animation
    setTimeout(() => {
        continueButton.classList.remove("hidden");
    }, 5000); // Adjust timing as necessary
});
window.onbeforeunload = function () {
    // Scroll to the top on page reload
    window.scrollTo(0, 0);
};

window.addEventListener("resize", onWindowResize, false);



