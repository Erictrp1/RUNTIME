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