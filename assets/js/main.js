let spielerPunkte = 0
let kiPunkte = 0

const punkteAnzeige = document.getElementById("punkte")
const ergebnisAnzeige = document.getElementById("ergebnis")

const schereButton = document.getElementById("schereBtn")
const steinButton = document.getElementById("steinBtn")
const papierButton = document.getElementById("papierBtn")

function kiWählt() {
    let zufall = Math.floor(Math.random() * 3)

    if (zufall === 0) {
        return "schere"
    } else if (zufall === 1) {
        return "stein"
    } else {
        return "papier"
    }
}

schereButton.addEventListener("click", () => {
    let ki = kiWählt()

    if (ki === "schere") {
        ergebnisAnzeige.textContent = "Unentschieden KI hat auch Schere."
    } else if (ki === "papier") {
        ergebnisAnzeige.textContent = "Gewonnen Schere schlägt Papier."
        spielerPunkte = spielerPunkte + 1
    } else if (ki === "stein") {
        ergebnisAnzeige.textContent = "Verloren Stein schlägt Schere."
        kiPunkte = kiPunkte + 1
    }

    punkteAnzeige.textContent = spielerPunkte + " : " + kiPunkte
    prüfeGewinner()
})

steinButton.addEventListener("click", () => {
    let ki = kiWählt()

    if (ki === "stein") {
        ergebnisAnzeige.textContent = "Unentschieden KI hat auch Stein."
    } else if (ki === "schere") {
        ergebnisAnzeige.textContent = "Gewonnen Stein schlägt Schere."
        spielerPunkte = spielerPunkte + 1
    } else if (ki === "papier") {
        ergebnisAnzeige.textContent = "Verloren Papier schlägt Stein."
        kiPunkte = kiPunkte + 1
    }

    punkteAnzeige.textContent = spielerPunkte + " : " + kiPunkte
    prüfeGewinner()
})

papierButton.addEventListener("click", () => {
    let ki = kiWählt()

    if (ki === "papier") {
        ergebnisAnzeige.textContent = "Unentschieden KI hat auch Papier."
    } else if (ki === "stein") {
        ergebnisAnzeige.textContent = "Gewonnen Papier schlägt Stein."
        spielerPunkte = spielerPunkte + 1
    } else if (ki === "schere") {
        ergebnisAnzeige.textContent = "Verloren Schere schlägt Papier."
        kiPunkte = kiPunkte + 1
    }

    punkteAnzeige.textContent = spielerPunkte + " : " + kiPunkte
    prüfeGewinner()
})

function prüfeGewinner() {
    if (spielerPunkte === 3) {
        alert("Du hast das Spiel gewonnen")
    } else if (kiPunkte === 3) {
        alert("Die KI hat gewonnen")
    }
}