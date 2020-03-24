# Challenge 2 - Digitale Klok SpaceX

Student: 18121837 - Patrick Picavet

## Uitleg

Ik heb allereerst in de html een overzicht gemaakt van de elementen die erin moeten komen te staan. Waaronder dus een artikel waarin de tijd in uren, minuten en seconden komt te staan die ik in javascript een waarde ga geven.

```html
<main>
        <article>
            <h2 id="hours"></h2>
            <h2 class="punten">:</h2>
            <h2 id="minutes"></h2>
            <h2 class="punten">:</h2>
            <h2 id="seconden"></h2>
        </article>
        <article>
            <h1 id="deDag"></h1>
        </article>
    </main>
```

Ik heb een 2e artikel gemaakt om wat ruimte te creeeren tussen de huidige dag en de tijd.

### JavaScript

Voor de JavaScript heb ik online opgezocht hoe ik nou eigenlijk de huidige tijd en dag kon gebruiken in mijn website. Dat kon ik met de volgende code doen

```JavaScript

var date = new Date();
    var uur = date.getHours();
    var minuut = date.getMinutes();
    var seconden = date.getSeconds();
    var dag = date.getDay();

```

Vervolgens moest ik deze waardes implementeren in de id's die ik heb gemaakt in mijn html dat heb ik als volgt gedaan.

```JavaScript
 document.getElementById("deDag").innerHTML = dagen[dag];
    document.getElementById("hours").innerHTML = ("0" + date.getHours()).substr(-2);
    document.getElementById("minutes").innerHTML = ("0" + date.getMinutes()).substr(-2);
    document.getElementById("seconden").innerHTML = ("0" + date.getSeconds()).substr(-2);
    
    setInterval(klokTijd, 1000)
```

Dat substr(-2) begrijp ik echter niet zo goed, ik hoop dat dit geen probleem is.


