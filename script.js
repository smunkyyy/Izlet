//UNOS PODATAKA

let ime = prompt("Unesi svoje ime:");
let cijenaUlaznice = Number(prompt("Unesi cijenu jedne ulaznice:"));
let brojUlaznica = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi raspolozivi budzet:"));


//IZRACUN I USPOREDBA

let ukupniTrosak = cijenaUlaznice * brojUlaznica;
let preostaliIznos = budzet - ukupniTrosak;
let dovoljnoNovca = budzet >= ukupniTrosak;

let usporedba = "";

if (budzet > ukupniTrosak) {
    usporedba = true;
} else if (budzet < ukupniTrosak) {
    usporedba = false;
} else {
    usporedba = "jednako";
}

let nastavakPlaniranja = confirm(
    "Zelis li nastaviti s planiranjem izleta?"
);


//ISPIS REZULTATA

alert(
    "Ime: " + ime +
    "\nUkupni trosak: " + ukupniTrosak + " EUR" +
    "\nPreostali iznos: " + preostaliIznos + " EUR" +
    "\nDovoljno novca: " + dovoljnoNovca +
    "\nTocan iznos: " + (budzet == ukupniTrosak) +
    "\nNastavak planiranja: " + nastavakPlaniranja
);