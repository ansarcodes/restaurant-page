import homeImg from "./images/mayweed-flower.png";
export default function() {
    const divContent = document.getElementById("content");
    let divTitle = document.createElement("div");
    divTitle.textContent = "Mayweed  Valley";
    divTitle.classList.add("title");

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

    let homeSchedule = document.createElement("div");
    homeSchedule.classList.add("schedule");
    let scheduleTitle = document.createElement("div");
    scheduleTitle.classList.add("schedule-title");
    scheduleTitle.textContent = "Schedule";
    let schedule1 = document.createElement("div");
    schedule1.classList.add("schedule-days");
    schedule1.textContent = "Mon-Fri 09:00-18:00";
    let schedule2 = document.createElement("div");
    schedule2.classList.add("schedule-days");
    schedule2.textContent = "Sat-Sun 10:00-15:00"
    homeSchedule.append(scheduleTitle, schedule1, schedule2);

    let homeAddress = document.createElement("div");
    homeAddress.classList.add("address");
    homeAddress.textContent = "Address: 42 Green Ave, Mayweed Valley";

    divContent.append(divTitle, homeDescription, homeImage, homeSchedule, homeAddress);
};