const cards = document.querySelectorAll('.content__card');

cards.forEach(card => {
  const icon = card.querySelector('.icon');
  const body = card.querySelector('.content__card-body');

  icon.addEventListener('click', () => {
    const isOpen = body.classList.toggle('show');

    icon.classList.toggle('icon-plus', !isOpen);
    icon.classList.toggle('icon-minus', isOpen);
  });
});