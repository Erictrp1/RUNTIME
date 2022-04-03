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


//CHANGEMENT DE BACKGROUND
function changeBackground(){
    const images = [
        'url("images/volcan.jpg")',
        'url("images/coucher.jpg")',
        'url("images/plage.jpg")',
    ]

    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.background= bg;
    section.style.backgroundSize= "cover";
    section.style.backgroundPosition= "center";
    section.style.transition = "all.5s";
}

setInterval(changeBackground, 5000)