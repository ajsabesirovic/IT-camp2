// 6. Zbir elemenata
// Unositi brojeve 5 puta, zatim izračunati njihov zbir koristeći for petlju.

// let zbir = 0;

// for (let i = 0; i < 5; i++) {
//   let number = Number(prompt("Unesite neki broj "));
//   zbir += number;
// }

// console.log(zbir);

// 7. Najveći broj
// Pronađi najveći i najmanji broj od 5 unetih brojeva.

// let najmanji = 0;
// let najveci = 0;

// for (let i = 0; i < 5; i++) {
//   let number = Number(prompt("Unesite neki broj "));
//   if (i == 0) {
//     najmanji = number;
//     najveci = number;
//   }
//   if (number > najveci) {
//     najveci = number;
//   }
//   if (number < najmanji) {
//     najmanji = number;
//   }
// }
// console.log(najmanji, "je najmanji");
// console.log(najveci, "je najveći");

let br = 23;

for (let i = 2; i < br; i++) {
  if (br % i == 0) {
    console.log(br, "nije prost broj");
    break;
  }
}
