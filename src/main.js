import "./scss/main.scss";

const body = document.querySelector("body");
const form = document.querySelector(".form");
const button = document.querySelector(".theme");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// lepo objasnjeno
// https://medium.com/samsung-internet-dev/responsive-design-the-dark-mode-10f8f9ca2c2

button.addEventListener("click", () => {
    const hasSysDarkClass = document.body.classList.contains("systemDarkPreference");

    const currentSysIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = (hasSysDarkClass && currentSysIsDark) ||
        document.body.classList.contains("dark");

        console.log({hasSysDarkClass, currentSysIsDark, isDark});

    document.body.classList.remove("systemDarkPreference");
    document.body.classList.toggle("dark", !isDark);
});
