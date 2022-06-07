var i = 1;

// Modifica exemplul astfel incat bucla sa numere de la 1 la 100.
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Ce se intampla daca i este initializat cu valoarea 101?
// while (i <= 100) {
//   console.log(i);

//   i++;
// }
// i = 101;

// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// }

// Modifica exemplul astfel incat bucla sa
// numere de la 1 la 67.
// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// while (i < 67) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
// while (i < 67) {
//   console.log(i);

//   if (i === 12) {
//     console.log(i);
//     break;
//   }

//   i++;
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
// while (i <= 32) {
//   i++;

//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
var userNumber = prompt(
  'Introduceti un numar caruia doriti sa i aflati multiplii:',
);
var multipleLimit = prompt(
  `Pana la ce numar ati dori sa cautam multiplii pentru ${userNumber}?`,
);

while (i <= multipleLimit) {
  if (i % userNumber === 0 && i > 5) {
    console.log(i);
  }

  i++;
}
