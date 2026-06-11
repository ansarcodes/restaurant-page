import cherryPieImg from "./images/cherry-pie.jpg";
import blinyImg from "./images/bliny.jpg";
import carrotCakeImg from "./images/carrot-cake.jpg";
import beveragesImg from "./images/beverages.jpg";

export default function() {
    const divContent = document.getElementById("content");
    
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Menu";
    
    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    let menuItems = [
        {name:"Cherry Pie", description: "A classic dessert made with a buttery, flaky pastry crust and a jammy fruit filling", price: "$50", image:cherryPieImg, credits: `Photo by <a href="https://unsplash.com/@shamblenstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shamblen Studios</a> on <a href="https://unsplash.com/photos/a-bunch-of-different-types-of-fruit-k0u3zcxTIaY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
        },
        {name: "Bliny", description: "A traditional slavic thin pancakes", price: "$25", image:blinyImg, credits: `Photo by <a href="https://unsplash.com/@nouvellebeautybymarion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">M Draa</a> on <a href="https://unsplash.com/photos/white-and-blue-ceramic-plate-26NcU5Vkd5o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`},
        {name: "Carrot Cake", description:"A sweet and moist spice cake, full of cut carrots and toasted nuts, and covered in cream cheese icing", price: "$50", image: carrotCakeImg, credits: `Photo by <a href="https://unsplash.com/@wanderlust612?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katelynn Ruffner</a> on <a href="https://unsplash.com/photos/white-pasta-on-black-ceramic-plate-A43QCRZK7NM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`},
        {name: "Beverages", description: "Tea, coffee, milk, water", price: "Free with any order", image:beveragesImg, credits: `Photo by <a href="https://unsplash.com/@caferhino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cafe Rhino</a> on <a href="https://unsplash.com/photos/white-round-plastic-cups-on-gray-concrete-floor-94dk5XdeSHA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`}
    ];

    (function(){
        menuItems.forEach((item) => {
            let itemContainer = document.createElement("div");
            itemContainer.classList.add("menu-item");

            let itemName = document.createElement("div");
            itemName.textContent = item.name;
            itemName.classList.add("menu-item-name");
            let itemDescription = document.createElement("div");
            itemDescription.textContent = item.description;
            itemDescription.classList.add("menu-item-description");
            let itemPrice = document.createElement("div");
            itemPrice.textContent = item.price;
            itemPrice.classList.add("menu-item-price");
            let itemImageContainer = document.createElement("div");
            itemImageContainer.classList.add("menu-item-image-container");
            let itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.alt = item.name;
            let itemImageCredits = document.createElement("div");
            itemImageCredits.innerHTML = item.credits;
            itemImageContainer.append(itemImage, itemImageCredits);

            itemContainer.append(itemName, itemDescription, itemPrice, itemImageContainer);
            menuItemsContainer.appendChild(itemContainer);
        });
    })();


    divContent.append(menuTitle, menuItemsContainer);
}