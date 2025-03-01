// Uradjen domaci zadatak

let a = Number(prompt("Unesite broj a:"));
let b = Number(prompt("Unesite broj b:"));
// Number() funkcija pretvara string u broj,
// posto prompt vraca string
// a i b su promenljive koje korisnik unosi
// a i b su brojevi

if (a > b) {
  console.log("a je veci od b");
} else {
  // ako a nije vece od b,
  //  proveravamo da li je b vece od a ILI su jednaki pomocu ugnjezdenog if-a
  if (a < b) {
    console.log("b je veci od a");
  } else {
    console.log("a i b su jednaki");
  }
}

if (a > b) {
  console.log("a je veci od b");
}
if (a < b) {
  console.log("b je veci od a");
}
if (a == b) {
  console.log("a i b su jednaki");
}
//  svaki if se proverava sto dodatno opterecuje program
// bolje je koristiti if-else
