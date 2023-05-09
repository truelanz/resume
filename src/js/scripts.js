
import "../css/global.style.css";
import "../css/changer-theme.css";
import "../css/light-theme.css";
import "../css/responsive.css";

/* theme changer */
const toggleButton = document.querySelector('#changer');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});


/* pop-up */
var links = document.querySelectorAll('.alert-link');
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    Swal.fire({
      title: 'Página em construção, por favor, acesse o github para mais informações.',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  })
})
