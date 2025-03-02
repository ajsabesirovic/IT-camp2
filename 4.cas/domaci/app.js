// 1. Zadatak
let cena = Number(prompt("Unesite cenu proizvoda:"));

if (cena > 5000) {
  console.log(`Imate popust od 10% i nova cena je ${cena * 0.9}`);
}
// Ako je cena veća od 5000, ispisali smo novu cenu sa popustom od 10% tako sto pomnozimo cenu sa 0.9.
// Ako je cena manja ili jednaka 5000, ne ispisujemo ništa.

// 2. Zadatak
let brojMeseca = Number(prompt("Unesite broj meseca"));

if (brojMeseca === 1) {
  console.log("Mesec: Januar, Broj dana: 31");
} else if (brojMeseca === 2) {
  console.log("Mesec: Februar, Broj dana: 28");
} else if (brojMeseca === 3) {
  console.log("Mesec: Mart, Broj dana: 31");
} else if (brojMeseca === 4) {
  console.log("Mesec: April, Broj dana: 30");
} else if (brojMeseca === 5) {
  console.log("Mesec: Maj, Broj dana: 31");
} else if (brojMeseca === 6) {
  console.log("Mesec: Jun, Broj dana: 30");
} else if (brojMeseca === 7) {
  console.log("Mesec: Jul, Broj dana: 31");
} else if (brojMeseca === 8) {
  console.log("Mesec: Avgust, Broj dana: 31");
} else if (brojMeseca === 9) {
  console.log("Mesec: Septembar, Broj dana: 30");
} else if (brojMeseca === 10) {
  console.log("Mesec: Oktobar, Broj dana: 31");
} else if (brojMeseca === 11) {
  console.log("Mesec: Novembar, Broj dana: 30");
} else if (brojMeseca === 12) {
  console.log("Mesec: Decembar, Broj dana: 31");
} else {
  console.log("Nepostojeci mesec");
}
// Na osnovu broja koji je korisnik uneo, ispisujemo ime meseca i broj dana u tom mesecu.

// 3. Zadatak
let a = Number(prompt("Unesite svoju visinu"));
if (a < 150) {
  console.log("vi ste niska osoba");
} else if (a > 180) {
  console.log("vi ste visoka osoba");
} else {
  console.log("vi ste osoba srednjeg rasta");
}
// Na osnovu visine koju je korisnik uneo, ispisujemo da li je osoba niska, visoka ili srednjeg rasta.

// 4. Zadatak
let broj = Number(prompt("Unesi broj"));
if (broj >= 90) {
  console.log("Ocena je 5");
} else if (broj >= 80 && broj <= 89) {
  console.log("Ocena je 4");
} else if (broj >= 70 && broj <= 79) {
  console.log("Ocena je 3");
} else if (broj >= 60 && broj <= 69) {
  console.log("Ocena je 2");
} else {
  console.log("Ocena je 1");
}

// 5. Zadatak
let a1 = Number(prompt("Unesi broj"));

if (a1 > 99 && a1 < 1000) {
  console.log("Broj je trocifren");
} else if (a1 < -99 && a1 > -1000) {
  console.log("Broj je negativno trocifren");
} else {
  console.log("Broj nije trocifren");
}
