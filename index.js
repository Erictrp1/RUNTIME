//HEURE
var dateGlobale = new Date();

var temps = document.getElementById("heure");

var dateGlobale = new Date();
var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();
temps.innerHTML = heure + ":" + minute;

if(heure < 10){
    heure = "0" + heure;
}

if(minute < 10){
    minute = "0" + minute;
}

setInterval(function(){
    var dateGlobale = new Date();
    var heure = dateGlobale.getHours();
    var minute = dateGlobale.getMinutes();
    temps.innerHTML = heure + ":" + minute;
}, 1000);


//COMENT
function changeComent(){
    var opinion = document.querySelector("#opinion");
    opinion.innerHTML = '"Chaque année, escapade dans notre belle capitale.<br>A chaque balade, je fais de nouvelles découvertes, on peut<br>visiter sans faire d\'énormes dépenses si l\'on veut bien marcher."';
}

document.querySelector("#bouton").addEventListener("click", changeComent);


//CHANGEMENT DE BACKGROUND
function changeBackground(){
    const images = [
        'url("images/paris2.jpg")',
        'url("images/roue.jpg")',
        'url("images/pont.jpg")',
    ]

    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.background= bg;
    section.style.backgroundSize= "cover";
    section.style.backgroundPosition= "center";
    section.style.transition = "all.5s";
}

setInterval(changeBackground, 5000)