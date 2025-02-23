// 1. Provera pozitivnog, negativnog broja ili nule

let broj = prompt("Unesite broj:");
// Korisnik unosi broj pomoću prompt funkcije

// Proveravamo da li je broj veći od 0
if (broj > 0) {
  console.log("Broj je pozitivan.");
} else {
  // Ako broj nije veći od 0, proveravamo da li je manji od 0
  if (broj < 0) {
    console.log("Broj je negativan.");
  } else {
    // Ako broj nije ni veći ni manji od 0, onda je sigurno nula
    console.log("Broj je nula.");
  }
}

// 2. Paran ili neparan broj

let br = prompt("Unesite broj:");
// Korisnik unosi broj pomoću prompt funkcije

// Proveravamo da li je broj paran (deljiv sa 2 bez ostatka)
if (br % 2 === 0) {
  console.log("Broj je paran.");
} else {
  console.log("Broj je neparan.");
}
