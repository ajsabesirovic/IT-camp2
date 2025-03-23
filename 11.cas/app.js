// 2. zadatak

let n = Number(prompt("Unesite broj n:"));
let i = 1;
let zbir = 0;

// while (i <= n) {
//   zbir += i;
//   i += 2;
// }

while (i <= n) {
  if (i % 2 == 0) {
    zbir += i;
  }
  i++;
}

console.log(zbir);
