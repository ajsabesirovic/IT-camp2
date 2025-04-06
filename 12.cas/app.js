// let x;
// console.log(x);
// let y = null;

let array = ["a", "b", "c", "d", 1, 2, 3, true, false, [1, 2, 3]];
console.log(array[7]);
console.log(array[2]);
console.log(array[9][1]);

console.log(array.length);

let nizBrojeva = [2, 5, 3, 8, 10, 20, 30];
nizBrojeva.push("hg");
// // console.log(novaDuzina);
// console.log(nizBrojeva);

let poslednjiEl = nizBrojeva.pop();
// // console.log(poslednjiEl);
// console.log(nizBrojeva);

nizBrojeva.shift();
// console.log(nizBrojeva);

nizBrojeva.unshift("UNSHIFT ELEMENT");
// console.log(nizBrojeva);

nizBrojeva[0] = "nova vrednost";
// console.log(nizBrojeva);

let nizSlova = ["b", "a", "z", "n"];
nizSlova.sort();
console.log(nizSlova);
console.log(nizBrojeva);
nizBrojeva.sort();
console.log(nizBrojeva);

nizBrojeva.sort((a, b) => a - b);
console.log(nizBrojeva);

let niz = [];

// for (let i = 1; i <= 10; i++) {
//   niz.unshift(i);
// }
for (let i = 1; i <= 10; i++) {
  niz.push(i);
}
niz.sort((a, b) => b - a);
console.log(niz);

console.log(niz[niz.length - 1]);
console.log(niz.includes(3));
console.log([4, 10, 200, 1].sort((a, b) => b - a));
