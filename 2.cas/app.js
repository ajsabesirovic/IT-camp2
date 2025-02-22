let ime = "Ajsa"; // Deklarišemo promenljivu ime i dodeljujemo joj vrednost "ajsa"
let godine = 20; // Deklarišemo promenljivu godine i dodeljujemo joj vrednost 10

// Proveravamo da li je korisnik punoletan
if (godine >= 18) {
  console.log("punoletni ste!"); // Ako korisnik ima 18 ili više godina, ispisuje se ova poruka
} else {
  // Ako korisnik ima manje od 18 godina, izvršava se ovaj kod
  console.log(
    `${ime} maloletni ste, imate ${godine} godina, fali vam ${
      18 - godine
    } godine`
  );
  // Backticks (`) omogućavaju: ✅ Umetanje promenljivih i izraza unutar stringa sa ${}
  //   ✅ Lakše formatiranje nego sa +
  //   ✅ Direktno izvođenje izraza unutar ${}

  // Alternativni načini ispisa iste informacije:
  // console.log("maloletni ste, imate ", godine, "godine");
  // console.log("maloletni ste fali vam", 18 - godine, "godina");
  // console.log(`maloletni ste, fali vam ${18 - godine} godine.`);
}

if (godine < 1) {
  console.log("prvi if");
}
if (godine < 2) {
  console.log("drugi if");
}
if (godine < 3) {
  console.log("treci if");
}
// Ovi if izrazi nisu međusobno povezani.
// Svaki se proverava posebno.
// Ako je vrednost varijable godine = 20, nijedan od ovih if izraza nije tačan, pa se ništa ne ispisuje.

if (godine < 4) {
  console.log("imate manje od 4 godine");
} else {
  console.log("imate 50 godina");
}
// Ako je godine < 4, ispisuje se "imate manje od 4 godine".
// Ako uslov if (godine < 4) nije tačan, izvršava se else, koji ispisuje "imate 50 godina".
// Važno !!!:
// else je vezan samo za if (godine < 4), a ne za neki drugi if iznad njega.

// Ako imamo više if izraza, svi mogu biti tačni i svi će se izvršiti.
// Ako koristimo else, on se izvršava samo ako njegov if nije bio tačan.
