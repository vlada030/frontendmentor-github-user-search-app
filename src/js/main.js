import "../scss/main.scss";
import getData from './fetchData'
import {updateUI} from './updateUI'

import {body, form, themeButton, lightIcon, darkIcon } from './variables'

window.addEventListener('load', () => {
    getData('octocat').then((enhancedUserData) => {
        //console.log(enhancedUserData);
        updateUI(enhancedUserData);
    });
})

form.addEventListener("submit", (e) => {
    const username = document.getElementById("username").value;
    e.preventDefault();

    getData(username).then((enhancedUserData) => {
        //console.log(enhancedUserData);
        updateUI(enhancedUserData);
    });
});

// provera ikonice teme u zavisnosti koja je tema sistema
document.addEventListener("DOMContentLoaded", () => {
    const currentSysIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    lightIcon.classList.toggle("disabled", currentSysIsDark);
    darkIcon.classList.toggle("disabled", !currentSysIsDark);
});

// lepo objasnjeno
// https://medium.com/samsung-internet-dev/responsive-design-the-dark-mode-10f8f9ca2c2
themeButton.addEventListener("click", () => {
    const hasSysDarkClass = body.classList.contains("systemDarkPreference");

    const currentSysIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const isDark =
        (hasSysDarkClass && currentSysIsDark) ||
        body.classList.contains("dark");

    body.classList.remove("systemDarkPreference");
    body.classList.toggle("dark", !isDark);
    lightIcon.classList.toggle("disabled", !isDark);
    darkIcon.classList.toggle("disabled", isDark);
});
