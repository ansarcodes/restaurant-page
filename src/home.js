import homeImg from "./images/shamblen-studios-k0u3zcxTIaY-unsplash.jpg";
export default function() {
    const divContent = document.getElementById("content");
    let divTitle = document.createElement("div");
    divTitle.textContent = "Mayweed  Valley";
    divTitle.classList.add("title");
    divContent.appendChild(divTitle);
    
    let homeImageFigure = document.createElement("figure");
    let homeImageFigcaption = document.createElement("figcaption");
    let homeImage = document.createElement("img");
    homeImage.id = "homeImage";
    homeImage.src = homeImg;
    homeImage.alt = "Cherry Pie";
    homeImageFigcaption.innerHTML = `Photo by <a href="https://unsplash.com/@shamblenstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shamblen Studios</a> on <a href="https://unsplash.com/photos/a-bunch-of-different-types-of-fruit-k0u3zcxTIaY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
    homeImageFigure.appendChild(homeImage);
    homeImageFigure.appendChild(homeImageFigcaption);
    divContent.appendChild(homeImageFigure);

    let homeDescription = document.createElement("div");
    homeDescription.classList.add("description");
    homeDescription.textContent = "Welcome to our cozy place! We offer tasty food and inner peace.";
    divContent.appendChild(homeDescription);

    let homeSchedule = document.createElement("div");
    homeSchedule.classList.add("schedule");
    let schedule1 = document.createElement("div");
    schedule1.classList.add("schedule-days");
    schedule1.textContent = "Mon-Fri 09:00-18:00";
    homeSchedule.appendChild(schedule1);
    let schedule2 = document.createElement("div");
    schedule2.classList.add("schedule-days");
    schedule2.textContent = "Sat-Sun 10:00-15:00"
    homeSchedule.appendChild(schedule2);
    divContent.appendChild(homeSchedule);
};