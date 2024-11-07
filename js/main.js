const cardsContainerEL = document.getElementById("cards-container");
const cardsLimit = 6;
let singleCardHTML = ``;

fetch("https://jsonplaceholder.typicode.com/photos?_limit=" + cardsLimit)
  .then((res) => res.json())
  .then((photo) => {
    console.log(photo);
  });
