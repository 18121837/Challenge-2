//Functie voor het aanmaken van de klok
function klokTijd() {
    var date = new Date();
    var uur = date.getHours();
    var minuut = date.getMinutes();
    var seconden = date.getSeconds();
    var dag = date.getDay();
    var dagen = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("deDag").innerHTML = dagen[dag];
    document.getElementById("hours").innerHTML = ("0" + date.getHours()).substr(-2);
    document.getElementById("minutes").innerHTML = ("0" + date.getMinutes()).substr(-2);
    document.getElementById("seconden").innerHTML = ("0" + date.getSeconds()).substr(-2);
    setInterval(klokTijd, 1000)
}
klokTijd();
//code voor de avond verandering
function nachtMode() {
    var date = new Date();
    var u = date.getHours();
    var d = document.getElementById('theme');
    if (u > 18 || u < 6) {
        d.classList.add('nacht');
    }
    else {
        d.classList.remove('nacht');
    }
}
setInterval(nachtMode, 1000)
nachtMode();