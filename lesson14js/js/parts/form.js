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
}

module.exports = form;