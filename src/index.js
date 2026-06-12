import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

homePage();
// menuPage();
//aboutPage();

document.getElementById("home-btn").addEventListener("click", homePage);
document.getElementById("menu-btn").addEventListener("click", menuPage)
document.getElementById("about-btn").addEventListener("click", aboutPage)

export default function(...children){
    const divContent = document.getElementById("content");
    divContent.replaceChildren();
    divContent.append(...children);
};