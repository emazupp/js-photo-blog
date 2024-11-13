const cardsContainerEl = document.getElementById("cards-container");
const cardsLimit = 6;
const modalContainerEl = document.getElementById("image-modal-container");
const modalEl = document.getElementById("image-modal");
const closeModalButton = document.getElementById("close-modal-button");
const bodyEl = document.getElementById("body");

const closeModal = () => {
  modalContainerEl.classList.add("d-none");
  bodyEl.classList.remove("overflow-y-hidden");
};

const openModal = () => {
  modalContainerEl.classList.remove("d-none");
  bodyEl.classList.add("overflow-y-hidden");
};

const upperCaseFirstLetter = (title) => {
  const firstLetterUpperCased = title[0].toUpperCase();
  const titleExceptFirstLetter = title.substring(1);
  return firstLetterUpperCased + titleExceptFirstLetter;
};

fetch("https://jsonplaceholder.typicode.com/photos?_limit=" + cardsLimit)
  .then((res) => res.json())
  .then((photos) => {
    let cardsContentHtml = "";
    for (el of photos) {
      const upperCasedTitle = upperCaseFirstLetter(el.title);
      cardsContentHtml += `<div class="col-md-6 col-lg-4">
            <div class="card border-1">
              <img class="p-3" src="${el.url}" alt="img" />
              <div class="card-body">
                <p class="card-text">${upperCasedTitle}</p>
              </div>
            </div>
          </div> `;
    }
    cardsContainerEl.innerHTML = cardsContentHtml;
    const cardsEl = document.querySelectorAll(".card");

    for (card of cardsEl) {
      card.addEventListener("click", function () {
        modalEl.src = this.children[0].getAttribute("src");
        openModal();
      });
    }

    /* EVENTLISTENER CHIUSURA MODAL */
    closeModalButton.addEventListener("click", closeModal);
    modalContainerEl.addEventListener("click", (e) => {
      if (e.target.id === "image-modal-container") closeModal();
    });
  })
  .catch((error) => {
    cardsContainerEl.innerHTML = `<div class="col-12">
      <div class="p-2 bg-danger rounded"> 
          <p class="fs-5 fw-bold">Errore: ${error}</p>
      </div>
    </div> `;
  });
