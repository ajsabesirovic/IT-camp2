console.log("this is my first console log");
// Ispisuje tekst u konzolu pregledača

alert("Hello world");
// Prikazuje iskačući prozor (alert) sa porukom "Hello world"

document.getElementById("paragraf").innerHTML = "this is a paragraph";
// Menja sadržaj HTML elementa sa ID-jem "paragraf" i postavlja ga na "this is a paragraph"

document.write("helllo world");
// Direktno upisuje "helllo world" u HTML dokument

alert("4" + 9);
// Prikazuje alert sa rezultatom "49" jer se broj 9 konvertuje u string i spaja sa "4"

alert(4 + "3");
// Prikazuje alert sa rezultatom "43" jer se broj 4 konvertuje u string i spaja sa "3"

alert("ajsa" + " " + "besirovic");
// Prikazuje alert sa spojenim stringovima "ajsa besirovic"

// 1
// 1.2
// -1
// number
// Prikazuje primere brojeva

// true false
// bool boolean
// Prikazuje primere Boolean vrednosti (true ili false)

// "1"
// "true"
// "ajsa"
// string
// Prikazuje primere string vrednosti

console.log(1 + 1);
// Ispisuje rezultat sabiranja: 2

console.log(1 - 1);
// Ispisuje rezultat oduzimanja: 0

console.log(1 / 1);
// Ispisuje rezultat deljenja: 1

console.log(1 * 1);
// Ispisuje rezultat množenja: 1

console.log(17 % 3);
// Ispisuje ostatak pri deljenju 17 sa 3 (modulo operacija): 2

console.log(2 ** 3);
// Ispisuje rezultat 2 na treći stepen (stepenovanje): 8

console.log("2" == 2);
// Proverava da li su "2" i 2 jednaki po vrednosti (ignoriše tipove), ispisuje: true

console.log("2" === 2);
// Proverava da li su "2" i 2 jednaki i po vrednosti i po tipu, ispisuje: false

console.log(4 > 2);
// Proverava da li je 4 veće od 2, ispisuje: true

console.log(4 < 2);
// Proverava da li je 4 manje od 2, ispisuje: false

console.log("2" >= 2);
// Proverava da li je "2" veće ili jednako 2 (konvertuje string u broj), ispisuje: true

console.log("2" <= 2);
// Proverava da li je "2" manje ili jednako 2, ispisuje: true

console.log(2 !== 2);
// Proverava da li 2 NIJE jednako 2, ispisuje: false

let mojeGodine = 20;
// Deklariše promenljivu "mojeGodine" i dodeljuje joj vrednost 20

mojeGodine++;
// Povećava(inkrementira) vrednost promenljive "mojeGodine" za 1 (postaje 21)

mojeGodine--;
// Smanjuje(dekrementira) vrednost promenljive "mojeGodine" za 1 (vraća se na 20)

mojeGodine += 30;
// Dodaje 30 na trenutnu vrednost (postaje 50)
// Isto kao da smo napisali mojeGodine = mojeGodine + 30
// tj. nova vrednost varijable uzima vrednost stare + 30

mojeGodine -= 20;
// Oduzima 20 od trenutne vrednosti (postaje 30)

mojeGodine *= 3;
// Množi trenutnu vrednost sa 3 (postaje 90)

console.log(mojeGodine);
// Ispisuje trenutnu vrednost "mojeGodine" (90)

console.log(mojeGodine - "ajsa");
// Pokušava da oduzme string od broja, rezultat je NaN (Not a Number)

let ime = "Ajsa";
// Deklariše promenljivu "ime" i dodeljuje joj vrednost "Ajsa"

let prezime = "Besirovic";
// Deklariše promenljivu "prezime" i dodeljuje joj vrednost "Besirovic"

console.log(ime + prezime);
// Spaja stringove "Ajsa" i "Besirovic", ispisuje: "AjsaBesirovic"

console.log(ime, prezime);
// Ispisuje dva stringa odvojena zarezom: "Ajsa Besirovic"

let moje_godine = 20;
// Deklariše promenljivu "moje_godine" i dodeljuje joj vrednost 20

moje_godine = 22;
// Menja vrednost promenljive "moje_godine" na 22

// console.log(moje_godine);
// Ispisuje vrednost "moje_godine" (22)

mojegodine = mojegodine + 1;
// Povećava promenljivu "mojegodine" za 1, ali ta varijabla nije deklarisana (izaziva grešku)

mojegodine++;
// Pokušava da uveća "mojegodine", ali pošto varijabla ne postoji, pa će doći do greške
