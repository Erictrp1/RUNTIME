//HOURS
var dateGlobale = new Date();

var temps = document.getElementById("heure");

var dateGlobale = new Date();
var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();
temps.innerHTML = heure + ":" + minute;


setInterval(function(){
    var dateGlobale = new Date();
    var heure = dateGlobale.getHours();
    var minute = dateGlobale.getMinutes();
    temps.innerHTML = heure + ":" + minute;
}, 1000);

if(heure < 10){
    heure = "0" + heure;
}

if(minute < 10){
    minute = "0" + minute;
}


//CHANGE TEXT AND IMAGE BY CURRENT TIME
var nightday = document.querySelector('#nightday');
var sunOrMoon = document.querySelector('#sun');
    
if(heure > 12){
    nightday.innerHTML = 'GOOD AFTERNOON';
    sunOrMoon.innerHTML = '<i class="fa-solid fa-sun"></i>';
}else{
    nightday.innerHTML = 'GOOD MORNING';
    sunOrMoon.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
if(heure > 15){
    nightday.innerHTML = 'GOOD EVENING';
    sunOrMoon.innerHTML = '<i class="fa-solid fa-moon"></i>';
}


//COMENT
function changeComent(){
    var opinion = document.querySelector("#opinion");
    opinion.innerHTML = '"Chaque année, escapade dans notre belle capitale.<br>A chaque balade, je fais de nouvelles découvertes, on peut<br>visiter sans faire d\'énormes dépenses si l\'on veut bien marcher."';
}

document.querySelector("#bouton").addEventListener("click", changeComent);


//AUTOCHANGE-BACKGROUND
function changeBackground(){
    const images = [
        'url("images/paris2.jpg")',
        'url("images/roue.jpg")',
    ]

    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.background= bg;
    section.style.backgroundSize= "cover";
    section.style.backgroundPosition= "center";
    section.style.transition = "all.5s";
}setInterval(changeBackground, 5000)