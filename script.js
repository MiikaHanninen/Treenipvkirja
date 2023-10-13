document.addEventListener("DOMContentLoaded", function () {
  const aInput = document.getElementById("activity"); // ASETETAAN JA TALLENNETAAN INPUT KENTÄT
  const pvmInput = document.getElementById("date");
  const kestoInput = document.getElementById("duration");
  const hauskuusInput = document.getElementById("hauskaa");

  addTreeni.addEventListener("click", function () {
    // TALLENNETAAN KÄYTTÄJÄN SYÖTTÄMÄT TIEDOT
    const activity = aInput.value;
    const date = pvmInput.value;
    const duration = kestoInput.value;
    const fun = hauskuusInput.value;

    if (!activity) {
      // TARKISTETAAN ETTÄ KAIKKI KENTÄT ON TÄYTETTY JA KESTO ON ENEMMÄN KUIN 0 MIN, MIKÄLI NÄIN EI OLE, LISÄTÄÄN PUNAISET REUNAT JA ALERT-TEKSTI
      alert("Tarkista aktiviteetti!");
      aInput.style.borderColor = "red";
      aInput.style.borderWidth = "medium";
      return;
    } else {
      aInput.style.borderColor = "black";
      aInput.style.borderWidth = "thin";
    }
    if (!date) {
      alert("Tarkista päivämäärä!");
      pvmInput.style.borderColor = "red";
      pvmInput.style.borderWidth = "medium";
      return;
    } else {
      pvmInput.style.borderColor = "black";
      pvmInput.style.borderWidth = "thin";
    }
    if (duration <= 0) {
      alert("Tarkista kesto!");
      kestoInput.style.borderColor = "red";
      kestoInput.style.borderWidth = "medium";
      return;
    } else {
      kestoInput.style.borderColor = "black";
      kestoInput.style.borderWidth = "thin";
    } if (!fun) {
      alert("Oliko hauskaa?");
      hauskuusInput.style.borderColor = "red";
      hauskuusInput.style.borderWidth = "medium";
      return;
    } else {
      hauskuusInput.style.borderColor = "black";
      hauskuusInput.style.borderWidth = "thin";
    }

    let treeniLista;
    if (activity === "kuntosali") {
      // VALITAAN OIKEA LISTÄ RIIPPUEN ONKO KÄYTTÄJÄ VALINNUT GOLFTREENIN VAI SALITREENIN
      treeniLista = document.getElementById("salitreenit");
    } else {
      treeniLista = document.getElementById("golftreenit");
    }

    const listItem = document.createElement("li"); //LI ALKION LISÄYS SYÖTETYILLE TREENEILLE
    listItem.innerHTML = `<strong>Aktiviteetti:</strong> ${activity}, <strong>Päivämäärä:</strong> ${date}, <strong>Kesto:</strong> ${duration} min, <strong>Oliko hauskaa:</strong> ${fun}`; // TALLENNETAAN KÄYTTÄJÄN SYÖTTÄMÄT TIEDOT

    treeniLista.appendChild(listItem); // LISÄTÄÄN TREENI LISTAAN"

    aInput.value = "";
    pvmInput.value = "";
    kestoInput.value = "";
    hauskuusInput.value = ""; // VAIHDETAAN INPUT TYHJÄKSI LISÄYKSEN JÄLKEEN
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // LISÄTÄÄN FUNKTIO JOLLA VOIDAAN TYHJENTÄÄ LISTAT
  const tyhjennaButtonGolf = document.getElementById("tyhjennagolf");
  const treeniLista = document.getElementById("golftreenit");

  const tyhjennaButtonSali = document.getElementById("tyhjennasali");
  const treeniLista2 = document.getElementById("salitreenit");

  tyhjennaButtonGolf.addEventListener("click", function () {
    // TYHJENTÄÄ GOLF LISTAN NAPPIA PAINAMALLA
    treeniLista.innerHTML = "";
  });

  tyhjennaButtonSali.addEventListener("click", function () {
    // TYHJENTÄÄ SALI LISTAN NAPPIA PAINAMALLA
    treeniLista2.innerHTML = "";
  });
});
