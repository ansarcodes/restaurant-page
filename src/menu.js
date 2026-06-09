    // let homeImageFigure = document.createElement("figure");
    // let homeImageFigcaption = document.createElement("figcaption");
    // let homeImage = document.createElement("img");
    // homeImage.id = "homeImage";
    // homeImage.src = homeImg;
    // homeImage.alt = "Cherry Pie";
    // homeImageFigcaption.innerHTML = `Photo by <a href="https://unsplash.com/@shamblenstudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shamblen Studios</a> on <a href="https://unsplash.com/photos/a-bunch-of-different-types-of-fruit-k0u3zcxTIaY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
    // homeImageFigure.append(homeImage, homeImageFigcaption);

export default function() {
    const divContent = document.getElementById("content");
    
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Menu";
    
    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    let menuItems = [];

    class menuItem {
        constructor(name, description, price) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = `${this.name}.jpg`;
        }
    };

    function addToMenu(name, description, price) {
        const newItem = new menuItem(name, description, price);
        menuItems.push(newItem);
    }


    divContent.append(menuTitle, menuItemsContainer);
}