let minuter = prompt("Hur många minuter per månad ringer du?")
let pris = prompt("Hur mycket kostar det i minuten att ringa?")

if (pris < 1) {
    resultat = Number(minuter) * Number(pris);  
}else{
    resultat = Number(minuter) / Number(pris);
}

alert("Priset är " + Math.round(resultat) + "kr" + " i månaden");