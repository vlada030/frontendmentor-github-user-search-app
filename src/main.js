import "./scss/main.scss";

const body = document.body;
const form = document.forms[0];
const button = document.querySelector(".theme");
const lightIcon = document.querySelector('.theme--light');
const darkIcon = document.querySelector('.theme--dark');

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// provera ikonice teme u zavisnosti koja je tema sistema
window.addEventListener('DOMContentLoaded', () => {
    
    const currentSysIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
        ).matches;
        
        lightIcon.classList.toggle("disabled", currentSysIsDark);
        darkIcon.classList.toggle("disabled", !currentSysIsDark);       
        
    })
    
// lepo objasnjeno
// https://medium.com/samsung-internet-dev/responsive-design-the-dark-mode-10f8f9ca2c2
button.addEventListener("click", () => {
    const hasSysDarkClass = body.classList.contains("systemDarkPreference");

    const currentSysIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = (hasSysDarkClass && currentSysIsDark) ||
        body.classList.contains("dark");

    body.classList.remove("systemDarkPreference");
    body.classList.toggle("dark", !isDark);
    lightIcon.classList.toggle("disabled", !isDark);
    darkIcon.classList.toggle("disabled", isDark);

});
