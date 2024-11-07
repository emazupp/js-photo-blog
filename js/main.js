const cardsContainerEl = document.getElementById("cards-container");
const cardsLimit = 6;
const modalContainerEl = document.getElementById("image-modal-container");
const modalEl = document.getElementById("image-modal");
const closeModalButton = document.getElementById("close-modal-button");

const closeModal = () => {
  modalContainerEl.classList.add("d-none");
};

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
    cardsContainerEl.innerHTML = cardsContentHtml;
    const cardsEl = document.querySelectorAll(".card");

    for (card of cardsEl) {
      card.addEventListener("click", function () {
        modalEl.src = this.children[0].getAttribute("src");
        modalContainerEl.classList.remove("d-none");
      });
      closeModalButton.addEventListener("click", closeModal);
    }
  });
