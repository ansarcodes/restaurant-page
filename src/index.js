import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";

homePage();
// menuPage();
//aboutPage();

const divContent = document.getElementById("content");

document.getElementById("home-btn").addEventListener("click", () => {
    divContent.replaceChildren();
    homePage();
})
document.getElementById("menu-btn").addEventListener("click", () => {
    divContent.replaceChildren();
    menuPage();
})
document.getElementById("about-btn").addEventListener("click", () => {
    divContent.replaceChildren();
    aboutPage();
})