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
    var uur = date.getHours();
    var dag = document.getElementById('theme');
    if (uur > 18 || uur < 6) {
        dag.classList.add('nacht');
    }
    else {
        dag.classList.remove('nacht');
    }
}
setInterval(nachtMode, 1000)
nachtMode();