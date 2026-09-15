// =========================
// NEXORA WEBSITE JAVASCRIPT
// =========================

// Automatically update the copyright year
const copyright = document.querySelector(".copyright");

if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.textContent = `© ${currentYear} NEXORA. All rights reserved.`;
}


// =========================
// DASHBOARD ANIMATION
// =========================

const dashboard = document.querySelector(".dashboard-card");

if (dashboard) {
    dashboard.addEventListener("mouseenter", () => {
        dashboard.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-5px)";
    });

    dashboard.addEventListener("mouseleave", () => {
        dashboard.style.transform =
            "perspective(1000px) rotateY(-5deg) rotateX(3deg)";
    });
}


// =========================
// BUTTON FEEDBACK
// =========================

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-button"
);

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);

    });

});