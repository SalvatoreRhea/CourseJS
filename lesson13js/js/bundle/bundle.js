(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

  let tab = require('../parts/tab.js');
  let timer = require('../parts/timer.js');
  let modal = require('../parts/modal.js');
  let form = require('../parts/form.js');
  let slider = require('../parts/slider.js');
  let calc = require('../parts/calc.js');

  tab();
  timer();
  modal();
  form();
  slider();
  calc();

});
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function calc() {
 let persons = document.getElementsByClassName('counter-block-input')[0],
     restDays = document.getElementsByClassName('counter-block-input')[1],
     place = document.getElementById('select'),
     totalValue = document.getElementById('total'),
     personsSum = 0,
     daysSum = 0,
     total =0;


     totalValue.innerHTML = 0;

     persons.addEventListener('change', function() {
       personsSum = parseInt(this.value);
       this.value = personsSum;
       total = (daysSum + personsSum)*4000;
       if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0 ) {
         totalValue.innerHTML = 0;
       } else {
         totalValue.innerHTML = total * place.options[place.selectedIndex].value;
       }
     });
     restDays.addEventListener('change', function() {
       daysSum = parseInt(this.value);
       this.value = daysSum;
       total = (daysSum + personsSum)*4000;
       if (persons.value == '' || restDays.value == '' || restDays.value <= 0 || persons.value <= 0) {
         totalValue.innerHTML = 0;
       } else {
         totalValue.innerHTML = total * place.options[place.selectedIndex].value;
       }
     });

     place.addEventListener('change', function() {
       if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
         totalValue.innerHTML = 0;
       } else {
         let a = total;
         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
       }
     });

}

module.exports = calc;
},{}],3:[function(require,module,exports){
function form() {
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
       // ╨Т╤Л╤И╨╡ ╤Б╨╛╨╖╨┤╨░╨╗╨╕ ╨╛╨▒╤К╨╡╨║╤В
       request.open("POST", 'server.php')
       // ╨Э╨░╤Б╤В╤А╨╛╨╕╨╗╨╕ ╨╖╨░╨┐╤А╨╛╤Б ╨▓╤Л╤И╨╡
       request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

       let formData = new FormData(form);

       request.send(formData);
       // ╨Ю╤В╨┐╤А╨░╨▓╨╗╨╡╨╝ ╨┤╨░╨╜╨╜╤Л╨╣ ╨╜╨░ ╤Б╨╡╤А╨▓

       request.onreadystatechange = function() {
         if (request.readyState < 4) {
           statusMessage.innerHTML = message.loading;
         } else if (request.readyState === 4) {
           if (request.status ==200 && request.status < 300) {
             statusMessage.innerHTML = message.success;
             // ╨Ф╨╛╨▒╨░╨▓╨╗╤П╨╡╨╝ ╨║╨╛╨╜╤В╨╡╨║╤В ╨╜╨░ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Г
           }
           else {
             statusMessage.innerHTML = message.failure;
           }
         }
       }
       for (let i = 0; i < input.length; i++) {
         input[i].value = '';
         // ╨Ю╤З╨╕╤Й╨░╨╡╨╝ ╨┐╨╛╨╗╤П ╨▓╨▓╨╛╨┤╨░
       }
       // ╨б╨╗╨╡╨┤╨╕╨╝ ╨╖╨░ ╨┤╨░╨╜╨╜╤Л╨╝╨╕

     });

 formBottom.addEventListener('submit', function(event) {
   event.preventDefault();
       formBottom.appendChild(statusMessage);

       // Ajax
       let request = new XMLHttpRequest();
       // ╨Т╤Л╤И╨╡ ╤Б╨╛╨╖╨┤╨░╨╗╨╕ ╨╛╨▒╤К╨╡╨║╤В
       request.open("POST", 'server.php')
       // ╨Э╨░╤Б╤В╤А╨╛╨╕╨╗╨╕ ╨╖╨░╨┐╤А╨╛╤Б ╨▓╤Л╤И╨╡
       request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

       let formData = new FormData(form);

       request.send(formData);
       // ╨Ю╤В╨┐╤А╨░╨▓╨╗╨╡╨╝ ╨┤╨░╨╜╨╜╤Л╨╣ ╨╜╨░ ╤Б╨╡╤А╨▓

       request.onreadystatechange = function() {
         if (request.readyState < 4) {
           statusMessage.innerHTML = message.loading;
         } else if (request.readyState === 4) {
           if (request.status ==200 && request.status < 300) {
             statusMessage.innerHTML = message.success;
             // ╨Ф╨╛╨▒╨░╨▓╨╗╤П╨╡╨╝ ╨║╨╛╨╜╤В╨╡╨║╤В ╨╜╨░ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Г
           }
           else {
             statusMessage.innerHTML = message.failure;
           }
         }
       }
       for (let i = 0; i < input.length; i++) {
         input[i].value = '';
         // ╨Ю╤З╨╕╤Й╨░╨╡╨╝ ╨┐╨╛╨╗╤П ╨▓╨▓╨╛╨┤╨░
       }
       // ╨б╨╗╨╡╨┤╨╕╨╝ ╨╖╨░ ╨┤╨░╨╜╨╜╤Л╨╝╨╕
 });
}

module.exports = form;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function slider() {
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
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
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
}


module.exports = tab;
},{}],7:[function(require,module,exports){
function timer() {

 let deadLine = '2018-04-16';

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
}

module.exports = timer;
},{}]},{},[1]);
