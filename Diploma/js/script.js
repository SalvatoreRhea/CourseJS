window.addEventListener('DOMContentLoaded', function() {

 // Modal

 let overlay        = document.getElementsByClassName('overlay')[0],
     popup          = document.getElementsByClassName('popup')[0],
     main           = document.getElementsByClassName('main')[0],
     custom         = document.getElementsByClassName('custom')[0],
     customInfo     = document.getElementsByClassName('custom-info')[0],
     customChar     = document.getElementsByClassName('custom-char')[0],
     customStyle    = document.getElementsByClassName('custom-style')[0],
     popupBtn       = document.getElementById('popup-btn');

     popupBtn.addEventListener('click', function() {
      overlay.style.display     = "none";
      main.style.display        = "none";
      custom.style.display      = "flex";
      customInfo.style.display  = "block";
      customChar.style.display  = "block";
      customStyle.style.display = "block";
     });


// Slider

 let slideIndex = 1,
     personEasy = document.getElementsByClassName('person-easy'),
     preview = document.getElementsByClassName('preview'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next');

     showSlides(slideIndex);

     function showSlides(n) {
      if (n > slides.length) {
       slideIndex = 1;
      };
      if (n < 1) {
       slideIndex = slides.length;
      };
     }



     function plusSlides (n) {
      showSlides(slideIndex += n)
     }

     prev.addEventListener('click', function() {
      plusSlides(-1);
     });
     next.addEventListener('click', function() {
      plusSlides(1);
     });



});