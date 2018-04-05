let age = document.getElementById('age');
    name = 'Gena';
    surename = 'Pupkin';
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


showUser.call(age, name, surename);