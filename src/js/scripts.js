
import "../css/global.style.css";
import "../css/changer-theme.css";
import "../css/light-theme.css";

const toggleButton = document.querySelector('#changer');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});
  