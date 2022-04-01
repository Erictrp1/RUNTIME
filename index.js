//HEURE
var dateGlobale = new Date();

var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();

if(heure < 10){
    heure = "0" + heure;
}

if(minute < 10){
    minute = "0" + minute;
}

document.getElementById("heure").innerHTML = heure + ":" + minute;


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