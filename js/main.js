const cardsContainerEL = document.getElementById("cards-container");
const cardsLimit = 6;
let singleCardHtml = `<div class="col-md-6 col-lg-4">
            <div class="card border-1">
              <img class="p-3" src="./img/wall.png" alt="img" />
              <div class="card-body">
                <p class="card-text">Ciao questo è un testo di prova</p>
              </div>
            </div>
          </div> `;

fetch("https://jsonplaceholder.typicode.com/photos?_limit=" + cardsLimit)
  .then((res) => res.json())
  .then((photo) => {
    let cardsContentHtml = "";
    for (el of photo) {
      cardsContentHtml += `<div class="col-md-6 col-lg-4">
            <div class="card border-1">
              <img class="p-3" src="${el.url}" alt="img" />
              <div class="card-body">
                <p class="card-text">${el.title}</p>
              </div>
            </div>
          </div> `;
    }
    cardsContainerEL.innerHTML = cardsContentHtml;
  });
