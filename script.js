let pfad = "img/";

let photos = [
    "Bild1.jpg",
    "Bild2.jpg",
    "Bild3.jpg",
    "Heißluftballon.jpg",
    "Rasender_Roland.jpg",
    "Rose.jpg",
    "Rügen_Fähre.jpg",
    "Rügen4.jpg",
    "Rügen5.jpg",
    "Schmetterling.jpg",
    "Sonne_Wolken.jpg",
    "Sonnenuntergang.jpg",
];
let zaehler = 0;

function render() {
    let contentRef = document.getElementById("content");
    for (let index = 0; index < photos.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(i) {
    return `<div onclick="toggleOverlay('${pfad + photos[i]}')"><img src="${
        pfad + photos[i]
    }" alt="${photos[i]}"></div>`;
}

// Funktion zum öffnen/ schliessen des Overlays
function toggleOverlay(path, title) {
    // Funktion zum Öffnen des Bildes im Dialog
    const dialogImg = document.getElementById("dialog-img");
    dialogImg.src = path; // Setzt die Quelle des vergrößerten Bildes
    document.getElementById("photo-title").innerText = title;
    let overlayRef = document.getElementById("overlay");

    overlayRef.classList.toggle("d_none");
}

// Bild setzen sobald Dokument geladen wurde
window.onload = function () {
    render();
    document.getElementById("dialog-img").src = pfad + photos[0];

    // Event Listener
    document.getElementById("linksButton").onclick = function () {
        links();
    };
    document.getElementById("rechtsButton").onclick = function () {
        rechts();
    };
};

function links() {
    // Wenn der Zaehler 0 ist soll wieder von hinten angefangen werden
    if (zaehler == 0) {
        zaehler = photos.length - 1;
        document.getElementById("dialog-img").src = photos[photos.length - 1];
    } else {
        // Wenn nicht erstes Bild dann ein Bild zurück
        zaehler--;
        document.getElementById("dialog-img").src = photos[zaehler];
    }
}

function rechts() {
    // Wenn der Zaehler das Maxmimum erreicht hat soll wieder von vorne angefangen werden
    if (zaehler == photos.length - 1) {
        zaehler = 0;
        document.getElementById("dialog-img").src = photos[0];
    } else {
        // Wenn nicht letztes Bild dann nächstes anzeigen
        zaehler++;
        document.getElementById("dialog-img").src = photos[zaehler];
    }
}
