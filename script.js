function poveziPolje(inputId, outputId, zadaniTekst) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    input.addEventListener("input", function () {
        output.textContent = input.value || zadaniTekst;
    });
}

poveziPolje("ime", "cvIme", "Ime i prezime");
poveziPolje("email", "cvEmail", "Email");
poveziPolje("telefon", "cvTelefon", "Telefon");
poveziPolje("adresa", "cvAdresa", "Mjesto stanovanja");
poveziPolje("pozicija", "cvPozicija", "Željena pozicija");
poveziPolje("linkedin", "cvLinkedin", "LinkedIn");
poveziPolje("portfolio", "cvPortfolio", "Portfolio / web stranica");
poveziPolje("opis", "cvOpis", "Ovdje će se prikazati tvoj osobni opis.");
poveziPolje("posao", "cvPosao", "Radno mjesto i poslodavac");
poveziPolje("poslodavac", "cvPoslodavac", "Poslodavac");
poveziPolje("mjestoRada", "cvMjestoRada", "Mjesto rada");
poveziPolje("iskustvo", "cvIskustvo", "Ovdje će se prikazati radno iskustvo.");
poveziPolje("postignuca", "cvPostignuca", "Ključna postignuća");
poveziPolje("obrazovanje", "cvObrazovanje", "Ovdje će se prikazati obrazovanje.");
poveziPolje("smjer", "cvSmjer", "Smjer / program obrazovanja");
poveziPolje("kvalifikacija", "cvKvalifikacija", "Stečena kvalifikacija / zanimanje");
poveziPolje("mjestoSkole", "cvMjestoSkole", "Mjesto školovanja");
poveziPolje("certifikat", "cvCertifikat", "Naziv certifikata / tečaja");
poveziPolje("ustanovaCertifikata", "cvUstanovaCertifikata", "Ustanova / izdavatelj");
poveziPolje("projektNaziv", "cvProjektNaziv", "Naziv projekta");
poveziPolje("projektUloga", "cvProjektUloga", "Moja uloga");
poveziPolje("projektOpis", "cvProjektOpis", "Opis projekta");
poveziPolje("projektLink", "cvProjektLink", "Link projekta");
poveziPolje("volOrganizacija", "cvVolOrganizacija", "Organizacija");
poveziPolje("volUloga", "cvVolUloga", "Uloga / aktivnost");
poveziPolje("volMjesto", "cvVolMjesto", "Mjesto");
poveziPolje("volOpis", "cvVolOpis", "Opis aktivnosti");
poveziPolje("vjestine", "cvVjestine", "Ovdje će se prikazati vještine.");
poveziPolje("hobiji", "cvHobiji", "Ovdje će se prikazati hobiji i interesi.");


const fotografija = document.getElementById("fotografija");
const cvFotografija = document.getElementById("cvFotografija");

fotografija.addEventListener("change", function () {
    const datoteka = fotografija.files[0];

    if (datoteka) {
        const reader = new FileReader();

        reader.onload = function (e) {
            cvFotografija.src = e.target.result;
            cvFotografija.style.display = "block";
        };

        reader.readAsDataURL(datoteka);
    }
});

const dodajPosao = document.getElementById("dodajPosao");
let brojPoslova = 1;

dodajPosao.addEventListener("click", function () {
    brojPoslova++;

    const noviPosao = document.createElement("div");
    noviPosao.className = "dodatni-posao";

    noviPosao.innerHTML = `
        <label>Radno mjesto i poslodavac ${brojPoslova}</label>
        <input type="text" class="novi-posao"
               placeholder="Primjer: Prodavač, naziv tvrtke">

        <label>Opis radnog iskustva</label>
        <textarea class="novo-iskustvo"
                  placeholder="Opiši zadatke i iskustvo"></textarea>
<button type="button" class="obrisi-posao">Obriši ovo iskustvo</button>
    `;

    dodajPosao.before(noviPosao);

    const cvNoviPosao = document.createElement("div");
    cvNoviPosao.className = "cv-dodatni-posao";

    cvNoviPosao.innerHTML = `
        <h3>Radno mjesto i poslodavac</h3>
        <p>Ovdje će se prikazati radno iskustvo.</p>
    `;

    document.getElementById("cvIskustvo").after(cvNoviPosao);

    const posaoInput = noviPosao.querySelector(".novi-posao");
    const iskustvoInput = noviPosao.querySelector(".novo-iskustvo");
    const posaoNaslov = cvNoviPosao.querySelector("h3");
    const iskustvoTekst = cvNoviPosao.querySelector("p");const obrisiPosao = noviPosao.querySelector(".obrisi-posao");

obrisiPosao.addEventListener("click", function () {
    noviPosao.remove();
    cvNoviPosao.remove();
});

const dodajObrazovanje = document.getElementById("dodajObrazovanje");
let brojObrazovanja = 1;

dodajObrazovanje.addEventListener("click", function () {
console.log("KLIK NA DODAJ OBRAZOVANJE RADI");
    brojObrazovanja++;

    const novoObrazovanje = document.createElement("div");
    novoObrazovanje.className = "dodatno-obrazovanje";

    novoObrazovanje.innerHTML = `
        <h3>Obrazovanje ${brojObrazovanja}</h3>

        <label>Naziv škole / fakulteta</label>
        <input
            type="text"
            class="nova-skola"
            placeholder="Primjer: Tehnička škola Sisak"
        >

        <label>Smjer / program obrazovanja</label>
        <input
            type="text"
            class="novi-smjer"
            placeholder="Primjer: Automehatroničar"
        >

        <label>Stečena kvalifikacija / zanimanje</label>
        <input
            type="text"
            class="nova-kvalifikacija"
            placeholder="Primjer: Automehatroničar"
        >

        <label>Mjesto školovanja</label>
        <input
            type="text"
            class="novo-mjesto-skole"
            placeholder="Primjer: Sisak"
        >

        <label>Početak obrazovanja</label>
        <input type="month" class="nova-skola-od">

        <label>Završetak obrazovanja</label>
        <input type="month" class="nova-skola-do">

        <label>
            <input
                type="checkbox"
                class="novo-trenutno-skolovanje"
            >
            Trenutno se školujem
        </label>

        <button
            type="button"
            class="obrisi-obrazovanje"
        >
            Obriši ovo obrazovanje
        </button>
    `;

    dodajObrazovanje.before(novoObrazovanje);

    const cvNovoObrazovanje = document.createElement("div");
    cvNovoObrazovanje.className = "cv-dodatno-obrazovanje";

    cvNovoObrazovanje.innerHTML = `
        <h3 class="cv-nova-skola">
            Naziv škole / fakulteta
        </h3>

        <p class="cv-novi-smjer">
            Smjer / program obrazovanja
        </p>

        <p class="cv-nova-kvalifikacija">
            Stečena kvalifikacija / zanimanje
        </p>

        <p class="cv-novo-mjesto-skole">
            Mjesto školovanja
        </p>

        <p class="cv-novo-razdoblje-skole">
            Razdoblje obrazovanja
        </p>
    `;

    const svaDodatnaObrazovanja =
        document.querySelectorAll(".cv-dodatno-obrazovanje");

    if (svaDodatnaObrazovanja.length > 0) {
        svaDodatnaObrazovanja[
            svaDodatnaObrazovanja.length - 1
        ].after(cvNovoObrazovanje);
    } else {
        document
            .getElementById("cvRazdobljeSkole")
            .after(cvNovoObrazovanje);
    }

    const skolaInput =
        novoObrazovanje.querySelector(".nova-skola");

    const smjerInput =
        novoObrazovanje.querySelector(".novi-smjer");

    const kvalifikacijaInput =
        novoObrazovanje.querySelector(".nova-kvalifikacija");

    const mjestoInput =
        novoObrazovanje.querySelector(".novo-mjesto-skole");

    const skolaOdInput =
        novoObrazovanje.querySelector(".nova-skola-od");

    const skolaDoInput =
        novoObrazovanje.querySelector(".nova-skola-do");

    const trenutnoInput =
        novoObrazovanje.querySelector(
            ".novo-trenutno-skolovanje"
        );

    const obrisiObrazovanje =
        novoObrazovanje.querySelector(".obrisi-obrazovanje");

    const cvSkola =
        cvNovoObrazovanje.querySelector(".cv-nova-skola");

    const cvSmjer =
        cvNovoObrazovanje.querySelector(".cv-novi-smjer");

    const cvKvalifikacija =
        cvNovoObrazovanje.querySelector(
            ".cv-nova-kvalifikacija"
        );

    const cvMjesto =
        cvNovoObrazovanje.querySelector(
            ".cv-novo-mjesto-skole"
        );

    const cvRazdoblje =
        cvNovoObrazovanje.querySelector(
            ".cv-novo-razdoblje-skole"
        );

    function formatirajDodatniMjesec(vrijednost) {
        if (!vrijednost) return "";

        const dijelovi = vrijednost.split("-");
        return dijelovi[1] + "/" + dijelovi[0];
    }

    function azurirajDodatnoRazdoblje() {
        const pocetak =
            formatirajDodatniMjesec(skolaOdInput.value);

        let zavrsetak =
            formatirajDodatniMjesec(skolaDoInput.value);

        if (trenutnoInput.checked) {
            zavrsetak = "danas";
        }

        if (pocetak || zavrsetak) {
            cvRazdoblje.textContent =
                (pocetak || "Početak") +
                " – " +
                (zavrsetak || "Završetak");
        } else {
            cvRazdoblje.textContent =
                "Razdoblje obrazovanja";
        }
    }

    skolaInput.addEventListener("input", function () {
        cvSkola.textContent =
            skolaInput.value || "Naziv škole / fakulteta";
    });

    smjerInput.addEventListener("input", function () {
        cvSmjer.textContent =
            smjerInput.value || "Smjer / program obrazovanja";
    });

    kvalifikacijaInput.addEventListener("input", function () {
        cvKvalifikacija.textContent =
            kvalifikacijaInput.value ||
            "Stečena kvalifikacija / zanimanje";
    });

    mjestoInput.addEventListener("input", function () {
        cvMjesto.textContent =
            mjestoInput.value || "Mjesto školovanja";
    });

    skolaOdInput.addEventListener(
        "input",
        azurirajDodatnoRazdoblje
    );

    skolaDoInput.addEventListener(
        "input",
        azurirajDodatnoRazdoblje
    );

    trenutnoInput.addEventListener("change", function () {
        if (trenutnoInput.checked) {
            skolaDoInput.value = "";
            skolaDoInput.disabled = true;
        } else {
            skolaDoInput.disabled = false;
        }

        azurirajDodatnoRazdoblje();
    });

    obrisiObrazovanje.addEventListener("click", function () {
        novoObrazovanje.remove();
        cvNovoObrazovanje.remove();
    });
});

    posaoInput.addEventListener("input", function () {
        posaoNaslov.textContent =
            posaoInput.value || "Radno mjesto i poslodavac";
    });

    iskustvoInput.addEventListener("input", function () {
        iskustvoTekst.textContent =
            iskustvoInput.value ||
            "Ovdje će se prikazati radno iskustvo.";
    });
});

const bojaCV = document.getElementById("bojaCV");
const cv = document.getElementById("cv");
const cvFotografijaBoja = document.getElementById("cvFotografija");

bojaCV.addEventListener("change", function () {
    const odabranaBoja = bojaCV.value;

    cv.style.borderTopColor = odabranaBoja;
    cvFotografijaBoja.style.borderColor = odabranaBoja;

    const naslovi = cv.querySelectorAll("h2");

    naslovi.forEach(function (naslov) {
        naslov.style.color = odabranaBoja;
    });

    document.getElementById("cvIme").style.color = odabranaBoja;
});

const poljaZaSpremanje = [
    "ime",
    "email",
    "telefon",
    "adresa",
    "opis",
    "posao",
    "iskustvo",
    "obrazovanje",
    "vjestine",
    "bojaCV"
];

poljaZaSpremanje.forEach(function (idPolja) {
    const polje = document.getElementById(idPolja);

    if (!polje) {
        return;
    }

    const spremljenaVrijednost =
        localStorage.getItem("cv_" + idPolja);

    if (spremljenaVrijednost !== null) {
        polje.value = spremljenaVrijednost;

        polje.dispatchEvent(new Event("input"));
        polje.dispatchEvent(new Event("change"));
    }

    polje.addEventListener("input", function () {
        localStorage.setItem("cv_" + idPolja, polje.value);
    });

    polje.addEventListener("change", function () {
        localStorage.setItem("cv_" + idPolja, polje.value);
    });
});

const jezik = document.getElementById("jezik");
const razinaJezika = document.getElementById("razinaJezika");
const cvJezik = document.getElementById("cvJezik");

function prikaziJezik() {
    if (jezik.value.trim() === "") {
        cvJezik.textContent = "Jezik - razina znanja";
    } else {
        cvJezik.textContent = jezik.value + " - " + razinaJezika.value;
    }
}

jezik.addEventListener("input", prikaziJezik);
razinaJezika.addEventListener("change", prikaziJezik);
const dodajJezik = document.getElementById("dodajJezik");
let brojJezika = 1;

dodajJezik.addEventListener("click", function () {
    brojJezika++;

    const noviJezik = document.createElement("div");
    noviJezik.className = "dodatni-jezik";

    noviJezik.innerHTML = `
        <label>Jezik ${brojJezika}</label>
        <input type="text" class="novi-jezik"
               placeholder="Primjer: Njemački">

        <label>Razina znanja</label>
        <select class="nova-razina-jezika">
            <option value="Osnovno">Osnovno</option>
            <option value="Srednje">Srednje</option>
            <option value="Napredno">Napredno</option>
            <option value="Izvrsno">Izvrsno</option>
            <option value="Materinski">Materinski</option>
        </select>

        <button type="button" class="obrisi-jezik">
            Obriši ovaj jezik
        </button>
    `;

    dodajJezik.before(noviJezik);

    const cvNoviJezik = document.createElement("p");
    cvNoviJezik.textContent = "Jezik - razina znanja";

    document.getElementById("cvJezik").after(cvNoviJezik);

    const jezikInput = noviJezik.querySelector(".novi-jezik");
    const razinaInput =
        noviJezik.querySelector(".nova-razina-jezika");
    const obrisiJezik = noviJezik.querySelector(".obrisi-jezik");

    function prikaziNoviJezik() {
        if (jezikInput.value.trim() === "") {
            cvNoviJezik.textContent = "Jezik - razina znanja";
        } else {
            cvNoviJezik.textContent =
                jezikInput.value + " - " + razinaInput.value;
        }
    }

    jezikInput.addEventListener("input", prikaziNoviJezik);
    razinaInput.addEventListener("change", prikaziNoviJezik);

    obrisiJezik.addEventListener("click", function () {
        noviJezik.remove();
        cvNoviJezik.remove();
    });
});

const noviCV = document.getElementById("noviCV");

noviCV.addEventListener("click", function () {
    const potvrda = confirm(
        "Jesi li siguran da želiš obrisati sve podatke i napraviti novi CV?"
    );

    if (!potvrda) {
        return;
    }

    document.querySelectorAll("input, textarea").forEach(function (polje) {
        polje.value = "";
        polje.dispatchEvent(new Event("input"));
    });

    document.querySelectorAll("select").forEach(function (izbornik) {
        izbornik.selectedIndex = 0;
        izbornik.dispatchEvent(new Event("change"));
    });

    document.querySelectorAll(
        ".dodatni-posao, .dodatno-obrazovanje, .dodatni-jezik"
    ).forEach(function (element) {
        element.remove();
    });

    document.querySelectorAll(
        ".cv-dodatni-posao, .cv-dodatni-jezik"
    ).forEach(function (element) {
        element.remove();
    });

    const cvObrazovanje = document.getElementById("cvObrazovanje");

    while (
        cvObrazovanje.nextElementSibling &&
        cvObrazovanje.nextElementSibling.tagName !== "H2"
    ) {
        cvObrazovanje.nextElementSibling.remove();
    }

    const cvJezik = document.getElementById("cvJezik");

    while (cvJezik.nextElementSibling) {
        cvJezik.nextElementSibling.remove();
    }

    cvFotografija.src = "";
    cvFotografija.style.display = "none";

    document.getElementById("cvIme").textContent = "Ime i prezime";
    document.getElementById("cvEmail").textContent = "Email";
    document.getElementById("cvTelefon").textContent = "Telefon";
    document.getElementById("cvAdresa").textContent = "Mjesto stanovanja";
    document.getElementById("cvOpis").textContent =
        "Ovdje će se prikazati tvoj osobni opis.";
    document.getElementById("cvPosao").textContent =
        "Radno mjesto i poslodavac";
    document.getElementById("cvIskustvo").textContent =
        "Ovdje će se prikazati radno iskustvo.";
    document.getElementById("cvObrazovanje").textContent =
        "Ovdje će se prikazati obrazovanje.";
    document.getElementById("cvVjestine").textContent =
        "Ovdje će se prikazati vještine.";
    document.getElementById("cvJezik").textContent =
        "Jezik - razina znanja";
});

const pdfGumb = document.getElementById("preuzmiPDF");

pdfGumb.addEventListener("click", async function () {
    const cvZaPDF = document.getElementById("cv");

    if (!cvZaPDF) {
        alert("CV nije pronađen.");
        return;
    }

    const stariTekst = pdfGumb.textContent;
    pdfGumb.disabled = true;
    pdfGumb.textContent = "Izrada PDF-a...";

    try {
        window.scrollTo(0, 0);

        const canvas = await html2canvas(cvZaPDF, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            scrollX: 0,
            scrollY: -window.scrollY,
            windowWidth: cvZaPDF.scrollWidth,
            windowHeight: cvZaPDF.scrollHeight
        });

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        const sirinaA4 = 210;
        const visinaA4 = 297;

        const visinaDijelaCanvasa = Math.floor(
            canvas.width * visinaA4 / sirinaA4
        );

        let pocetak = 0;
        let brojStranice = 0;

        while (pocetak < canvas.height) {
            const preostalaVisina = canvas.height - pocetak;

            const visinaDijela = Math.min(
                visinaDijelaCanvasa,
                preostalaVisina
            );

            const dioCanvasa = document.createElement("canvas");

            dioCanvasa.width = canvas.width;
            dioCanvasa.height = visinaDijela;

            const kontekst = dioCanvasa.getContext("2d");

            kontekst.fillStyle = "#ffffff";
            kontekst.fillRect(
                0,
                0,
                dioCanvasa.width,
                dioCanvasa.height
            );

            kontekst.drawImage(
                canvas,
                0,
                pocetak,
                canvas.width,
                visinaDijela,
                0,
                0,
                canvas.width,
                visinaDijela
            );

            if (brojStranice > 0) {
                pdf.addPage();
            }

            const slika = dioCanvasa.toDataURL(
                "image/jpeg",
                0.98
            );

            const visinaSlike =
                visinaDijela * sirinaA4 / canvas.width;

            pdf.addImage(
                slika,
                "JPEG",
                0,
                0,
                sirinaA4,
                visinaSlike
            );

            pocetak += visinaDijela;
            brojStranice++;
        }

        pdf.save("CVForge-CV.pdf");
    } catch (greska) {
        console.error("PDF greška:", greska);
        alert("PDF nije izrađen. Pokušaj ponovno.");
    } finally {
        pdfGumb.disabled = false;
        pdfGumb.textContent = stariTekst;
    }
});
     
const predlozakCV = document.getElementById("predlozakCV");
const cvPredlozak = document.getElementById("cv");

predlozakCV.addEventListener("change", function () {
    cvPredlozak.classList.remove(
        "moderni",
        "klasicni",
        "minimalni"
    );

    cvPredlozak.classList.add(predlozakCV.value);
});

// Moderni predložak odmah pri pokretanju
cvPredlozak.classList.add("moderni");

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./service-worker.js")
            .then(function () {
                console.log("CVForge service worker aktivan");
            })
            .catch(function (error) {
                console.log("Greška service workera:", error);
            });
    });
}

const trenutnoRadi = document.getElementById("trenutnoRadi");
const datumOd = document.getElementById("datumOd");
const datumDo = document.getElementById("datumDo");
const cvRazdobljeRada = document.getElementById("cvRazdobljeRada");

function formatirajMjesec(vrijednost) {
    if (!vrijednost) return "";

    const dijelovi = vrijednost.split("-");
    return dijelovi[1] + "/" + dijelovi[0];
}

function azurirajRazdobljeRada() {
    const pocetak = formatirajMjesec(datumOd.value);

    let zavrsetak = formatirajMjesec(datumDo.value);

    if (trenutnoRadi.checked) {
        zavrsetak = "danas";
    }

    if (pocetak || zavrsetak) {
        cvRazdobljeRada.textContent =
            (pocetak || "Početak") + " – " + (zavrsetak || "Završetak");
    } else {
        cvRazdobljeRada.textContent = "Razdoblje rada";
    }
}

datumOd.addEventListener("input", azurirajRazdobljeRada);
datumDo.addEventListener("input", azurirajRazdobljeRada);

trenutnoRadi.addEventListener("change", function () {
    if (trenutnoRadi.checked) {
        datumDo.value = "";
        datumDo.disabled = true;
    } else {
        datumDo.disabled = false;
    }

    azurirajRazdobljeRada();
});

const trenutnoSkolovanje = document.getElementById("trenutnoSkolovanje");
const skolaOd = document.getElementById("skolaOd");
const skolaDo = document.getElementById("skolaDo");
const cvRazdobljeSkole = document.getElementById("cvRazdobljeSkole");

function formatirajMjesecSkole(vrijednost) {
    if (!vrijednost) return "";

    const dijelovi = vrijednost.split("-");
    return dijelovi[1] + "/" + dijelovi[0];
}

function azurirajRazdobljeSkole() {
    const pocetak = formatirajMjesecSkole(skolaOd.value);
    let zavrsetak = formatirajMjesecSkole(skolaDo.value);

    if (trenutnoSkolovanje.checked) {
        zavrsetak = "danas";
    }

    if (pocetak || zavrsetak) {
        cvRazdobljeSkole.textContent =
            (pocetak || "Početak") + " – " + (zavrsetak || "Završetak");
    } else {
        cvRazdobljeSkole.textContent = "Razdoblje obrazovanja";
    }
}

skolaOd.addEventListener("input", azurirajRazdobljeSkole);
skolaDo.addEventListener("input", azurirajRazdobljeSkole);

trenutnoSkolovanje.addEventListener("change", function () {
    if (trenutnoSkolovanje.checked) {
        skolaDo.value = "";
        skolaDo.disabled = true;
    } else {
        skolaDo.disabled = false;
    }

    azurirajRazdobljeSkole();
});

const datumCertifikata = document.getElementById("datumCertifikata");
const cvDatumCertifikata = document.getElementById("cvDatumCertifikata");

datumCertifikata.addEventListener("input", function () {
    if (datumCertifikata.value) {
        const dijelovi = datumCertifikata.value.split("-");
        cvDatumCertifikata.textContent =
            dijelovi[1] + "/" + dijelovi[0];
    } else {
        cvDatumCertifikata.textContent = "Datum stjecanja";
    }
});

const dodajCertifikat = document.getElementById("dodajCertifikat");
let brojCertifikata = 1;

dodajCertifikat.addEventListener("click", function () {
    brojCertifikata++;

    const noviCertifikat = document.createElement("div");
    noviCertifikat.className = "dodatni-certifikat";

    noviCertifikat.innerHTML = `
        <h3>Certifikat / tečaj ${brojCertifikata}</h3>

        <label>Naziv certifikata / tečaja</label>
        <input
            type="text"
            class="novi-certifikat"
            placeholder="Primjer: HACCP certifikat"
        >

        <label>Ustanova / izdavatelj</label>
        <input
            type="text"
            class="nova-ustanova-certifikata"
            placeholder="Primjer: Hrvatska gospodarska komora"
        >

        <label>Datum stjecanja</label>
        <input
            type="month"
            class="novi-datum-certifikata"
        >

        <button
            type="button"
            class="obrisi-certifikat"
        >
            Obriši ovaj certifikat / tečaj
        </button>
    `;

    dodajCertifikat.before(noviCertifikat);

    const cvNoviCertifikat = document.createElement("div");
    cvNoviCertifikat.className = "cv-dodatni-certifikat";

    cvNoviCertifikat.innerHTML = `
        <p class="cv-novi-certifikat">
            Naziv certifikata / tečaja
        </p>

        <p class="cv-nova-ustanova-certifikata">
            Ustanova / izdavatelj
        </p>

        <p class="cv-novi-datum-certifikata">
            Datum stjecanja
        </p>
    `;

    const dodatniCertifikati =
        document.querySelectorAll(".cv-dodatni-certifikat");

    if (dodatniCertifikati.length > 0) {
        dodatniCertifikati[
            dodatniCertifikati.length - 1
        ].after(cvNoviCertifikat);
    } else {
        document
            .getElementById("cvDatumCertifikata")
            .after(cvNoviCertifikat);
    }

    const nazivInput =
        noviCertifikat.querySelector(".novi-certifikat");

    const ustanovaInput =
        noviCertifikat.querySelector(
            ".nova-ustanova-certifikata"
        );

    const datumInput =
        noviCertifikat.querySelector(
            ".novi-datum-certifikata"
        );

    const obrisiGumb =
        noviCertifikat.querySelector(".obrisi-certifikat");

    const cvNaziv =
        cvNoviCertifikat.querySelector(".cv-novi-certifikat");

    const cvUstanova =
        cvNoviCertifikat.querySelector(
            ".cv-nova-ustanova-certifikata"
        );

    const cvDatum =
        cvNoviCertifikat.querySelector(
            ".cv-novi-datum-certifikata"
        );

    nazivInput.addEventListener("input", function () {
        cvNaziv.textContent =
            nazivInput.value || "Naziv certifikata / tečaja";
    });

    ustanovaInput.addEventListener("input", function () {
        cvUstanova.textContent =
            ustanovaInput.value || "Ustanova / izdavatelj";
    });

    datumInput.addEventListener("input", function () {
        if (datumInput.value) {
            const dijelovi = datumInput.value.split("-");

            cvDatum.textContent =
                dijelovi[1] + "/" + dijelovi[0];
        } else {
            cvDatum.textContent = "Datum stjecanja";
        }
    });

    obrisiGumb.addEventListener("click", function () {
        noviCertifikat.remove();
        cvNoviCertifikat.remove();
    });
});

const projektDatum = document.getElementById("projektDatum");
const cvProjektDatum = document.getElementById("cvProjektDatum");

projektDatum.addEventListener("input", function () {
    if (projektDatum.value) {
        const dijelovi = projektDatum.value.split("-");

        cvProjektDatum.textContent =
            dijelovi[1] + "/" + dijelovi[0];
    } else {
        cvProjektDatum.textContent = "Datum projekta";
    }
});

const dodajProjekt = document.getElementById("dodajProjekt");
let brojProjekata = 1;

dodajProjekt.addEventListener("click", function () {
    brojProjekata++;

    const noviProjekt = document.createElement("div");
    noviProjekt.className = "dodatni-projekt";

    noviProjekt.innerHTML = `
        <h3>Projekt ${brojProjekata}</h3>

        <label>Naziv projekta</label>
        <input
            type="text"
            class="novi-projekt-naziv"
            placeholder="Primjer: CVForge"
        >

        <label>Moja uloga</label>
        <input
            type="text"
            class="novi-projekt-uloga"
            placeholder="Primjer: Autor projekta"
        >

        <label>Opis projekta</label>
        <textarea
            class="novi-projekt-opis"
            placeholder="Ukratko opiši projekt i što si napravio"
        ></textarea>

        <label>Link projekta</label>
        <input
            type="url"
            class="novi-projekt-link"
            placeholder="https://..."
        >

        <label>Datum projekta</label>
        <input
            type="month"
            class="novi-projekt-datum"
        >

        <button
            type="button"
            class="obrisi-projekt"
        >
            Obriši ovaj projekt
        </button>
    `;

    dodajProjekt.before(noviProjekt);

    const cvNoviProjekt = document.createElement("div");
    cvNoviProjekt.className = "cv-dodatni-projekt";

    cvNoviProjekt.innerHTML = `
        <p class="cv-novi-projekt-naziv">
            Naziv projekta
        </p>

        <p class="cv-novi-projekt-uloga">
            Moja uloga
        </p>

        <p class="cv-novi-projekt-opis">
            Opis projekta
        </p>

        <p class="cv-novi-projekt-link">
            Link projekta
        </p>

        <p class="cv-novi-projekt-datum">
            Datum projekta
        </p>
    `;

    const dodatniProjekti =
        document.querySelectorAll(".cv-dodatni-projekt");

    if (dodatniProjekti.length > 0) {
        dodatniProjekti[
            dodatniProjekti.length - 1
        ].after(cvNoviProjekt);
    } else {
        document
            .getElementById("cvProjektDatum")
            .after(cvNoviProjekt);
    }

    const nazivInput =
        noviProjekt.querySelector(".novi-projekt-naziv");

    const ulogaInput =
        noviProjekt.querySelector(".novi-projekt-uloga");

    const opisInput =
        noviProjekt.querySelector(".novi-projekt-opis");

    const linkInput =
        noviProjekt.querySelector(".novi-projekt-link");

    const datumInput =
        noviProjekt.querySelector(".novi-projekt-datum");

    const obrisiGumb =
        noviProjekt.querySelector(".obrisi-projekt");

    const cvNaziv =
        cvNoviProjekt.querySelector(".cv-novi-projekt-naziv");

    const cvUloga =
        cvNoviProjekt.querySelector(".cv-novi-projekt-uloga");

    const cvOpis =
        cvNoviProjekt.querySelector(".cv-novi-projekt-opis");

    const cvLink =
        cvNoviProjekt.querySelector(".cv-novi-projekt-link");

    const cvDatum =
        cvNoviProjekt.querySelector(".cv-novi-projekt-datum");

    nazivInput.addEventListener("input", function () {
        cvNaziv.textContent =
            nazivInput.value || "Naziv projekta";
    });

    ulogaInput.addEventListener("input", function () {
        cvUloga.textContent =
            ulogaInput.value || "Moja uloga";
    });

    opisInput.addEventListener("input", function () {
        cvOpis.textContent =
            opisInput.value || "Opis projekta";
    });

    linkInput.addEventListener("input", function () {
        cvLink.textContent =
            linkInput.value || "Link projekta";
    });

    datumInput.addEventListener("input", function () {
        if (datumInput.value) {
            const dijelovi = datumInput.value.split("-");

            cvDatum.textContent =
                dijelovi[1] + "/" + dijelovi[0];
        } else {
            cvDatum.textContent = "Datum projekta";
        }
    });

    obrisiGumb.addEventListener("click", function () {
        noviProjekt.remove();
        cvNoviProjekt.remove();
    });
});

const volOd = document.getElementById("volOd");
const volDo = document.getElementById("volDo");
const cvVolRazdoblje = document.getElementById("cvVolRazdoblje");

function formatirajDatumVolontiranja(vrijednost) {
    if (!vrijednost) return "";

    const dijelovi = vrijednost.split("-");
    return dijelovi[1] + "/" + dijelovi[0];
}

function azurirajRazdobljeVolontiranja() {
    const pocetak = formatirajDatumVolontiranja(volOd.value);
    const zavrsetak = formatirajDatumVolontiranja(volDo.value);

    if (pocetak || zavrsetak) {
        cvVolRazdoblje.textContent =
            (pocetak || "Početak") +
            " – " +
            (zavrsetak || "Završetak");
    } else {
        cvVolRazdoblje.textContent = "Razdoblje volontiranja";
    }
}

volOd.addEventListener("input", azurirajRazdobljeVolontiranja);
volDo.addEventListener("input", azurirajRazdobljeVolontiranja);

const dodajVolontiranje =
    document.getElementById("dodajVolontiranje");

let brojVolontiranja = 1;

dodajVolontiranje.addEventListener("click", function () {
    brojVolontiranja++;

    const novoVolontiranje = document.createElement("div");
    novoVolontiranje.className = "dodatno-volontiranje";

    novoVolontiranje.innerHTML = `
        <h3>Volontiranje ${brojVolontiranja}</h3>

        <label>Organizacija</label>
        <input
            type="text"
            class="nova-vol-organizacija"
            placeholder="Primjer: Crveni križ"
        >

        <label>Uloga / aktivnost</label>
        <input
            type="text"
            class="nova-vol-uloga"
            placeholder="Primjer: Volonter"
        >

        <label>Mjesto</label>
        <input
            type="text"
            class="novo-vol-mjesto"
            placeholder="Primjer: Sisak"
        >

        <label>Početak volontiranja</label>
        <input
            type="month"
            class="novo-vol-od"
        >

        <label>Završetak volontiranja</label>
        <input
            type="month"
            class="novo-vol-do"
        >

        <label>Opis aktivnosti</label>
        <textarea
            class="novi-vol-opis"
            placeholder="Opiši aktivnosti, odgovornosti i stečene vještine"
        ></textarea>

        <button
            type="button"
            class="obrisi-volontiranje"
        >
            Obriši ovo volontiranje
        </button>
    `;

    dodajVolontiranje.before(novoVolontiranje);

    const cvNovoVolontiranje = document.createElement("div");
    cvNovoVolontiranje.className = "cv-dodatno-volontiranje";

    cvNovoVolontiranje.innerHTML = `
        <p class="cv-nova-vol-organizacija">
            Organizacija
        </p>

        <p class="cv-nova-vol-uloga">
            Uloga / aktivnost
        </p>

        <p class="cv-novo-vol-mjesto">
            Mjesto
        </p>

        <p class="cv-novo-vol-razdoblje">
            Razdoblje volontiranja
        </p>

        <p class="cv-novi-vol-opis">
            Opis aktivnosti
        </p>
    `;

    const dodatnaVolontiranja =
        document.querySelectorAll(".cv-dodatno-volontiranje");

    if (dodatnaVolontiranja.length > 0) {
        dodatnaVolontiranja[
            dodatnaVolontiranja.length - 1
        ].after(cvNovoVolontiranje);
    } else {
        document
            .getElementById("cvVolOpis")
            .after(cvNovoVolontiranje);
    }

    const organizacijaInput =
        novoVolontiranje.querySelector(
            ".nova-vol-organizacija"
        );

    const ulogaInput =
        novoVolontiranje.querySelector(".nova-vol-uloga");

    const mjestoInput =
        novoVolontiranje.querySelector(".novo-vol-mjesto");

    const odInput =
        novoVolontiranje.querySelector(".novo-vol-od");

    const doInput =
        novoVolontiranje.querySelector(".novo-vol-do");

    const opisInput =
        novoVolontiranje.querySelector(".novi-vol-opis");

    const obrisiGumb =
        novoVolontiranje.querySelector(
            ".obrisi-volontiranje"
        );

    const cvOrganizacija =
        cvNovoVolontiranje.querySelector(
            ".cv-nova-vol-organizacija"
        );

    const cvUloga =
        cvNovoVolontiranje.querySelector(
            ".cv-nova-vol-uloga"
        );

    const cvMjesto =
        cvNovoVolontiranje.querySelector(
            ".cv-novo-vol-mjesto"
        );

    const cvRazdoblje =
        cvNovoVolontiranje.querySelector(
            ".cv-novo-vol-razdoblje"
        );

    const cvOpis =
        cvNovoVolontiranje.querySelector(
            ".cv-novi-vol-opis"
        );

    function formatirajDodatniVolDatum(vrijednost) {
        if (!vrijednost) return "";

        const dijelovi = vrijednost.split("-");
        return dijelovi[1] + "/" + dijelovi[0];
    }

    function azurirajDodatnoVolRazdoblje() {
        const pocetak =
            formatirajDodatniVolDatum(odInput.value);

        const zavrsetak =
            formatirajDodatniVolDatum(doInput.value);

        if (pocetak || zavrsetak) {
            cvRazdoblje.textContent =
                (pocetak || "Početak") +
                " – " +
                (zavrsetak || "Završetak");
        } else {
            cvRazdoblje.textContent =
                "Razdoblje volontiranja";
        }
    }

    organizacijaInput.addEventListener("input", function () {
        cvOrganizacija.textContent =
            organizacijaInput.value || "Organizacija";
    });

    ulogaInput.addEventListener("input", function () {
        cvUloga.textContent =
            ulogaInput.value || "Uloga / aktivnost";
    });

    mjestoInput.addEventListener("input", function () {
        cvMjesto.textContent =
            mjestoInput.value || "Mjesto";
    });

    opisInput.addEventListener("input", function () {
        cvOpis.textContent =
            opisInput.value || "Opis aktivnosti";
    });

    odInput.addEventListener(
        "input",
        azurirajDodatnoVolRazdoblje
    );

    doInput.addEventListener(
        "input",
        azurirajDodatnoVolRazdoblje
    );

    obrisiGumb.addEventListener("click", function () {
        novoVolontiranje.remove();
        cvNovoVolontiranje.remove();
    });
});










