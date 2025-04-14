//MODAL WINDOW

const openModalButton = document.querySelector("#btn-get");

const modal = document.querySelector(".modal");

const closeModalButton = document.querySelector(".modal_close");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

openModalButton.onclick = openModal;
closeModalButton.onclick = closeModal;
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const scrollModal = () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    openModal();
    window.removeEventListener("scroll", scrollModal);
  }
};

window.addEventListener("scroll", scrollModal);

const setOpenModal = setTimeout(openModal, 10000);
console.log(setOpenModal);
