import homeImg from "./images/mayweed-flower.png";
import divContent from "./index.js";
export default function() {
    let homeTitle = document.createElement("div");
    homeTitle.textContent = "Mayweed  Valley";
    homeTitle.classList.add("title");

    let homeDescription = document.createElement("div");
    homeDescription.classList.add("description");
    homeDescription.textContent = "Welcome to our cozy place! We offer tasty food and inner peace.";

    let homeImage = document.createElement("div");
    homeImage.classList.add("home-image-container");
    for(let i = 0; i < 5; i++) {
        let image = document.createElement("img");
        image.src = homeImg;
        image.alt = "Mayweed flower"
        image.classList.add("home-image");
        homeImage.append(image);
    }

    let homeHours = document.createElement("div");
    homeHours.classList.add("hours");
    let hoursTitle = document.createElement("div");
    hoursTitle.classList.add("hours-title");
    hoursTitle.textContent = "Hours";
    let hours1 = document.createElement("div");
    hours1.classList.add("hours-days");
    hours1.textContent = "Mon-Fri 09:00-18:00";
    let hours2 = document.createElement("div");
    hours2.classList.add("hours-days");
    hours2.textContent = "Sat-Sun 10:00-15:00"
    homeHours.append(hoursTitle, hours1, hours2);

    let homeAddress = document.createElement("div");
    homeAddress.classList.add("address");
    homeAddress.textContent = "Address: 42 Green Ave, Mayweed Valley";

    divContent(homeTitle, homeDescription, homeImage, homeHours, homeAddress);
    document.getElementById("home-btn").classList.add("active");
};