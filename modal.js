const modalBtn = document.querySelector(".modal-btn");
const modalBox = document.querySelector(".modal-box");
modalBtn.addEventListener("click", () => {
  modalBox.classList.toggle("show");
  document.body.classList.toggle("opacity");
});
