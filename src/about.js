import divContent from "./index.js";
export default function(){
    let aboutTitle = document.createElement("div");
    aboutTitle.classList.add("title");
    aboutTitle.textContent = "About Us";

    let aboutDescription = document.createElement("div");
    aboutDescription.classList.add("about-text");
    aboutDescription.textContent = "We are a small cozy place in a Mayweed Valley.";

    let aboutEstablished = document.createElement("div");
    aboutEstablished.classList.add("about-text");
    aboutEstablished.textContent = "Est. 2004";

    let aboutContact = document.createElement("div");
    aboutContact.classList.add("about-text");
    aboutContact.textContent = "Contact Us: +1-234-56-78 | contact@email.com";

    divContent(aboutTitle, aboutDescription, aboutEstablished, aboutContact);
    document.getElementById("about-btn").classList.add("active");

};