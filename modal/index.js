const modal = document.querySelector('.modal-container');
const btnCloseModal = document.querySelector('.btn-modal-close');

const btnOpenModal = document.querySelector('.btn-modal');
btnOpenModal.addEventListener('click', () => {
  modal.style.display = 'flex';
})

function onCloseModal() {
  return modal.style.display = 'none';
}

btnCloseModal.addEventListener('click', () => onCloseModal())

window.addEventListener('click', (e) => {
  if (e?.target === modal) onCloseModal();
})

