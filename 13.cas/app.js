// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(niz.sort((a, b) => b - a)[0]);

// console.log(Math.max(...niz));

let niz = [];
for (let i = 0; i < 5; i++) {
  let br = Number(prompt("Unesite broj:"));
  niz.push(br);
}
let br2 = Number(prompt("Pogodite najveci broj:"));
if (br2 == Math.max(...niz)) {
  console.log("Bravo, pogodili ste!");
}
// else {
//   if (niz.includes(br2)) {
//     console.log("Niste pogodili ali ste uneli broj iz niza");
//   }
// }
else if (niz.includes(br2)) {
  console.log("Niste pogodili ali ste uneli broj iz niza");
}

let najveci = niz[0];
for (let i = 1; i < niz.length; i++) {
  if (niz[i] > najveci) {
    najveci = niz[i];
  }
}
