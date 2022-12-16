(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    checkbox: document.querySelector("[data-modal-сheckbox]"),
    checkboxlabel: document.querySelector("[data-modal-сheckbox-label]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.checkbox.addEventListener("click", toggleCheckbox);
  refs.checkboxlabel.addEventListener("click", toggleCheckbox);

  function toggleCheckbox() {
    refs.checkbox.classList.toggle("checked");
  }
})();
