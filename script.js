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
poveziPolje("opis", "cvOpis", "Ovdje će se prikazati tvoj osobni opis.");
poveziPolje("posao", "cvPosao", "Radno mjesto i poslodavac");
poveziPolje("iskustvo", "cvIskustvo", "Ovdje će se prikazati radno iskustvo.");
poveziPolje("obrazovanje", "cvObrazovanje", "Ovdje će se prikazati obrazovanje.");
poveziPolje("vjestine", "cvVjestine", "Ovdje će se prikazati vještine.");

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
    brojObrazovanja++;

    const novoObrazovanje = document.createElement("div");
    novoObrazovanje.className = "dodatno-obrazovanje";

    novoObrazovanje.innerHTML = `
        <label>Škola ili obrazovanje ${brojObrazovanja}</label>

        <textarea class="novo-obrazovanje"
                  placeholder="Upiši završenu školu i smjer"></textarea>

        <button type="button" class="obrisi-obrazovanje">
            Obriši ovo obrazovanje
        </button>
    `;

    dodajObrazovanje.before(novoObrazovanje);

    const cvNovoObrazovanje = document.createElement("p");
    cvNovoObrazovanje.textContent =
        "Ovdje će se prikazati dodatno obrazovanje.";

    document.getElementById("cvObrazovanje").after(cvNovoObrazovanje);

    const obrazovanjeInput =
        novoObrazovanje.querySelector(".novo-obrazovanje");

    const obrisiObrazovanje =
        novoObrazovanje.querySelector(".obrisi-obrazovanje");

    obrazovanjeInput.addEventListener("input", function () {
        cvNovoObrazovanje.textContent =
            obrazovanjeInput.value ||
            "Ovdje će se prikazati dodatno obrazovanje.";
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

pdfGumb.addEventListener("click", function () {
    const biblioteka = document.createElement("script");

    biblioteka.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";

    biblioteka.onload = function () {
        const cvZaPDF = document.getElementById("cv");

        const postavke = {
            margin: 10,
            filename: "Moj-CV.pdf",
            image: {
                type: "jpeg",
                quality: 0.98
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            }
        };

        html2pdf()
            .set(postavke)
            .from(cvZaPDF)
            .save();
    };

    document.body.appendChild(biblioteka);
});










