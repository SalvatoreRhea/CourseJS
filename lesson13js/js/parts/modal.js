function modal() {
 let more = document.querySelector('.info'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function(event) {
    if (event.target && event.target.matches('.description-btn')) {
    event.target.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  }
  });

  close.addEventListener('click', function() {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

}

module.exports = modal;