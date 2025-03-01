// Zadatak 1 – Kalkulator
// Neka korisnik unese dva broja i operaciju (+, -, *, /).
// Na osnovu unete operacije, prikaži rezultat u konzoli.
// Ako korisnik unese nepoznatu operaciju, ispiši: "Nepoznata operacija!".

// Ako pokušava da deli nulom, ispiši: "Deljenje nulom nije dozvoljeno!".

let x = 5;
let y = 2;
let operacija = "+";

if (operacija === "+") {
  // Ako je operacija sabiranje, izvrši ovu granu i završi if-else blok.
  console.log(x + y);
} else if (operacija === "-") {
  // Ako prethodni uslov nije bio tačan, proverava se ovaj uslov.
  console.log(x - y);
} else if (operacija === "*") {
  // Ako nijedan od prethodnih uslova nije bio tačan, proverava se ovaj.
  console.log(x * y);
} else if (operacija === "/") {
  // Ovaj blok se izvršava samo ako su svi prethodni uslovi netačni.
  if (y !== 0) {
    // Ako delilac nije nula, izvrši deljenje.
    console.log(x / y);
  } else {
    // Ako je delilac nula, ispiši poruku o grešci.
    console.log("Deljenje nulom nije dozvoljeno!");
  }
} else {
  // Ako nijedan od prethodnih uslova nije bio ispunjen, izvršava se else grana.
  console.log("Nepoznata operacija!");
}

/*
   Kako funkcioniše else if?
   - Kada se naiđe na `if`, proverava se njegov uslov.
   - Ako je uslov tačan, izvršava se odgovarajući blok koda i preskaču se svi naredni `else if` i `else` blokovi.
   - Ako uslov nije tačan, prelazi se na sledeći `else if` i tako redom.
   - Kada se pronađe prvi tačan uslov, svi ostali se ignorišu, jer su međusobno povezani.
   - Ako nijedan uslov nije tačan, izvršava se `else` blok.
*/
