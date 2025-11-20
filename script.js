const button = document.getElementById("bottone-attivato"); //collega bottone html con js
const img = document.getElementById("immagine-lampadina"); // collega imamgine html con js



button.addEventListener("click", function () {
    console.log("Bottone cliccato", img.src); //messaggio in console quando il bottone viene cliccato 
    //.src indica il percorso dell'immagine

    if (img.src.includes("white_lamp.png")) {
        img.src = "./img/yellow_lamp.png";
        button.innerText = "Spegni lampadina"
    } else {
        img.src = "./img/white_lamp.png";
        button.innerText = "Accendi lampadina"
    }


});