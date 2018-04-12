window.addEventListener('DOMContentLoaded', function() {
 let tab = document.getElementsByClassName('info-header-tab'),
 tabContent = document.getElementsByClassName('info-tabcontent'),
 info = document.getElementsByClassName('info-header')[0];

 function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++){
   tabContent[i].classList.remove('show');
   tabContent[i].classList.add('hide');
  }
 }

 hideTabContent(1)

 function showTabContent(b) {
  if (tabContent[b].classList.contains('hide')){
   hideTabContent(0);
   tabContent[b].classList.remove('hide');
   tabContent[b].classList.add('show');
  }
 }

 info.addEventListener('click', function(event) {
  let target = event.target;
  if(target.className == 'info-header-tab') {
   for (let i = 0; i < tab.length; i++) {
    if (target == tab[i]) {
     showTabContent(i);
     break;
    }
   }
  };
 });

 // Timer

 let deadLine = '2018-04-09';

 function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),
  seconds = Math.floor( (t/1000) % 60 ),
  minutes = Math.floor ( (t/1000/60) % 60 ),
  hours = Math.floor( (t/(1000*60*60)) );

  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };

 };

 function setClock(id, endtime) {
  let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');


      function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

      function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
          hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
          clearInterval(timeInterval);
        }
      };

      // updateClock();
      let timeInterval = setInterval(updateClock, 1000);
 };

 setClock('timer', deadLine);


 // modal

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

// Form

let message = new Object();
message.loading = "Loading...";
message.success = "Thank you! We will contact you soon.";
message.failure = "Some troubles...";

let form = document.getElementsByClassName('main-form')[0],
    formBottom = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      // Ajax
      let request = new XMLHttpRequest();
      // Выше создали объект
      request.open("POST", 'server.php')
      // Настроили запрос выше
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(form);

      request.send(formData);
      // Отправлем данный на серв

      request.onreadystatechange = function() {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status ==200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            // Добавляем контект на страницу
          }
          else {
            statusMessage.innerHTML = message.failure;
          }
        }
      }
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        // Очищаем поля ввода
      }
      // Следим за данными

    });

formBottom.addEventListener('submit', function(event) {
  event.preventDefault();
      formBottom.appendChild(statusMessage);

      // Ajax
      let request = new XMLHttpRequest();
      // Выше создали объект
      request.open("POST", 'server.php')
      // Настроили запрос выше
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(form);

      request.send(formData);
      // Отправлем данный на серв

      request.onreadystatechange = function() {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status ==200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            // Добавляем контект на страницу
          }
          else {
            statusMessage.innerHTML = message.failure;
          }
        }
      }
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        // Очищаем поля ввода
      }
      // Следим за данными
});

// slider

let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      };
      if (n < 1) {
        slideIndex = slides.length;
      };
      for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      };
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
      };
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides (n) {
      showSlides(slideIndex += n)
    }

    function currentSlide(n) {
      showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function() {
      plusSlides(-1);
    });
    next.addEventListener('click', function() {
      plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
          currentSlide(i);
        }
      }
    });

    // Calc

    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total =0;


        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
          personsSum = +this.value;
          total = (daysSum + personsSum)*4000;
          if (restDays.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });
        restDays.addEventListener('change', function() {
          daysSum = +this.value;
          total = (daysSum + personsSum)*4000;
          if (persons.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });

        place.addEventListener('change', function() {
          if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
          } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
          }
        });


});