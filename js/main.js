const cardsContainerEl = document.getElementById("cards-container");
const cardsLimit = 6;
const modalContainerEl = document.getElementById("image-modal-container");
const modalEl = document.getElementById("image-modal");
const closeModalButton = document.getElementById("close-modal-button");

const closeModal = () => {
  modalContainerEl.classList.add("d-none");
};

const upperCaseFirstLetter = (title) => {
  const firstLetterUpperCased = title[0].toUpperCase();
  const titleExceptFirstLetter = title.substring(1);
  return firstLetterUpperCased + titleExceptFirstLetter;
};

fetch("https://jsonplaceholder.typicode.com/photos?_limit=" + cardsLimit)
  .then((res) => res.json())
  .then((photo) => {
    let cardsContentHtml = "";
    for (el of photo) {
      const upperCasedTitle = upperCaseFirstLetter(el.title);
      cardsContentHtml += `<div class="col-md-6 col-lg-4">
            <div class="card border-1">
              <img class="p-3" src="${el.url}" alt="img" />
              <div class="card-body">
                <p class="card-text fs-5">${upperCasedTitle}</p>
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
        modalContainerEl.classList.add("obfuscated");
      });
      closeModalButton.addEventListener("click", closeModal);
    }
  });

/* Picsum: https://picsum.photos/600 */
/* queste funzionano sempre */
