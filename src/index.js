import "./styles.css";
import homeImg from "./images/shamblen-studios-k0u3zcxTIaY-unsplash.jpg";

let divTitle = document.createElement("div");
divTitle.textContent = "Mayweed  Valley";
divTitle.classList.add("title");
document.getElementById("content").appendChild(divTitle);

let homeImageFigure = document.createElement("figure");
let homeImageFigcaption = document.createElement("figcaption");
let homeImage = document.createElement("img");
homeImage.src = homeImg;
homeImage.alt = "Cherry Pie";
homeImageFigcaption.innerHTML = `Photo by <a href="https://unsplash.com/@shamblenstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shamblen Studios</a> on <a href="https://unsplash.com/photos/a-bunch-of-different-types-of-fruit-k0u3zcxTIaY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
homeImageFigure.appendChild(homeImage);
homeImageFigure.appendChild(homeImageFigcaption);
document.getElementById("content").appendChild(homeImageFigure);