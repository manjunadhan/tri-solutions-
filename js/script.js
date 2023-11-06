document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to load, then hide the splash screen
    setTimeout(function () {
        const splashScreen = document.querySelector(".splash-screen");
        splashScreen.style.display = "none";
    }, 3000); // 3000 milliseconds (3 seconds) delay
});

