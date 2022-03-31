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


function changeBackground(){

    const images = [
        'url("images/volcan.jpg")',
        'url("images/coucher.jpg")',
    ]

    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.background= bg;
}

setInterval(changeBackground, 5000)