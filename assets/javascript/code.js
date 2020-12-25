var hojadeestilo = document.getElementById('stylesheet');
var button = document.getElementById('change-mode');
var text = document.getElementById('label');
var logo = document.getElementById('imagelogo');

button.addEventListener('change' , function(){
    if(button.checked === true){
        hojadeestilo.href = "assets/css/dark-mode.css";
        logo.src = 'assets/images/logo_white.png';
        text.innerText = "Dark Mode";
    }else{
        hojadeestilo.href = "assets/css/light-mode.css";
        logo.src = 'assets/images/logo_black.png';
        text.innerText = "Light Mode";
    }
});
