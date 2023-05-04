
const toggleButton = document.querySelector('#changer');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});

  