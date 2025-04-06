// ✅ FUNKCIJA: ispisBrojeva
// Ova funkcija ispisuje brojeve od 1 do 10 u konzolu.
function ispisBrojeva() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 🔁 Pozivanje funkcije 3 puta uz objašnjenje poziva
for (let i = 0; i < 3; i++) {
  console.log(`Funkcija ispisBrojeva je pozvana ${i + 1}. put`);
  ispisBrojeva(); // Poziv funkcije
}

/* 
  ✅ FUNKCIJA: ispisNBrojeva
  Ova funkcija prima jedan **parametar** `n` i ispisuje brojeve od 1 do `n`.
  
  Parametar:
  - `n`: broj do kojeg želimo da brojimo od 1
  
  Primer:
    ispisNBrojeva(50); // Ispisuje brojeve od 1 do 50
  */

function ispisNBrojeva(n) {
  console.log("Pocetak funkcije");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log("Kraj funkcije");
}

// Poziv funkcije sa argumentom 100
ispisNBrojeva(100);

// ❌ ispisNBrojeva(); // Ovo ne bi izvrsilo for petlju jer nema podrazumevanu vrednost za `n`nego je undefined

/* 
  ✅ FUNKCIJA: ispisNizaBrojeva
  Ova funkcija prima dva parametra `a` i `b`, i ispisuje sve brojeve od `a` do `b`.
  
  Parametri:
  - `a`: početni broj (ima podrazumevanu vrednost 10 ako se ne navede)
  - `b`: krajnji broj (obavezno mora da se prosledi)
  
  Primer:
    ispisNizaBrojeva(40, 50); // Ispisuje brojeve od 40 do 50
  */

function ispisNizaBrojeva(a = 10, b) {
  if (b === undefined) {
    console.log("Greška: Parametar 'b' nije prosleđen.");
    return;
  }
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}

// Poziv funkcije sa oba parametra
ispisNizaBrojeva(40, 45); // Ispisuje 40 do 45

// ❌ ispisNizaBrojeva(40); // Nedostaje drugi parametar
