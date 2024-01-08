const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnPopup');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active', 'active-popup');
});


    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      var btn = document.getElementById("scrollBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }

    document.getElementById("scrollBtn").addEventListener("click", function() {
      document.body.scrollTop = 0; // Para navegadores que não são compatíveis com document.documentElement
      document.documentElement.scrollTop = 0; // Para navegadores compatíveis com document.documentElement
    });