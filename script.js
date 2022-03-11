
let foodList = ["Bagel Street Cafe", "Burger King Odenplan", "Bun meat Bun", "Café Cups", "Curry Spice City", "Dani pizzeria", "Falafelkungen", "Food & Co", "Franklin Coffee House", "Hemköp Wasahallen", "Il Piccio Ristorante", "Kebab Kungen", "Max Hötorget", "McDonald's Sankt Eriksgatan", "McDonald's Sveavägen", "MehMah", "Nybergs Konditori", "Pizzeria La Grande", "Pizzeria Quattro", "Premium Grill", "Resturang Aroti", "Subway Cityterminalen", "Subway Hötorget", "Subway Odenplan", "Subway Sankt Eriksplan", "Subway ?", "Subway Kungsgatan", "Tacobar Sveavägen", "Tacobar Drottninggatan", "Thai Fastfood", "Zacalo"];
let placeList = ["Kungsgatan 40", "Karlbergsvägen 4", "Kungsgatan 25", "Fleminggatan 18", "Sveavägen 124", "Hagagatan 52", "Sveavägen 71", "Lindhagensgatan 98", "Upplandsgatan 47", "Upplandsgatan 28-32", "Fridhemsgatan 3", "Odengatan 54", "Kungsgatan 44", "Sankt Eriksgatan 32", "Sveavägen 71", "Hagagatan 44", "Upplandsgatan 26", "Dalagatan 32", "Hagagatan 4", "Karlbergsvägen 14-16", "Wallingatan 40", "Klarabergsviadukten 72", "Hötorget T-Bana Station", "Karlbergsvägen 16", "Sankt Eriksplan 17", "Sveavägen/Olofsgatan ?","Kungsgatan 41", "Sveavägen 108", "Drottninggatan 88", "Olof Palmesgata 7", "Kungsholmsgatan 22"];

const food = document.querySelector("[data-food]");
const place = document.querySelector("[data-place]");

const newPlaceButton = document.querySelector("[button-new-place]");
newPlaceButton.addEventListener("click", newPlace);

newPlace();

function newPlace(){
    let ran = Math.floor((Math.random() * foodList.length));
    food.innerHTML = foodList[ran];
    place.innerHTML = placeList[ran];
}
