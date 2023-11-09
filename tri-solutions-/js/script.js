document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to load, then hide the splash screen
    setTimeout(function () {
        const splashScreen = document.querySelector(".splash-screen");
        splashScreen.style.display = "none";
    }, 1000); // 1000 milliseconds (1 seconds) delay
});

