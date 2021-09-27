import cardsData from "./temlate.hbs";
import cards from "./menu.json";
import "./styles.css";

const inputToggle = document.querySelector('#theme-switch-toggle');
inputToggle.addEventListener("change", onChangeTheme);
function onChangeTheme(evt) {
    evt.target.checked ? document.body.classList.add("dark-theme") & localStorage.setItem("theme", "dark")
        : document.body.classList.replace("dark-theme", "light-theme") & localStorage.setItem("theme", "light");
}
currentTheme();

function currentTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        inputToggle.checked = false;
    } else {
        document.body.classList.add("dark-theme");
        inputToggle.checked = true;
    }
}
const cardsUl = document.querySelector(".js-menu");
cardsUl.innerHTML = cardsData(cards);