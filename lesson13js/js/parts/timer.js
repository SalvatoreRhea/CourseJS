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