// 1 Modifica exemplul astfel incat bucla sa numere de la 1 la 100
// var i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

// 2 Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// var i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// 3 Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;
// do {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// 4 Modifica exemplul astfel incat bucla sa
// numere de la 1 la 52
// var i = 1;
// do {
//   console.log(i);

//   if (i >= 52) {
//     break;
//   }

//   i++;
// } while (i < 100);

// 5 Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// var i = 1;
// do {
//   console.log(i);

//   if (i >= 51) {
//     break;
//   }

//   i++;
// } while (i < 100);

// 6 Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// var i = 1;
// do {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }

//   i++;
// } while (i < 100);

// 7 Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 0;
// do {
//   if (i % 2 === 0 && i >= 8) {
//     console.log(i);
//   }

//   i++;
// } while (i <= 32);

// 8 Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var i = 0;
var userNumber = prompt(
  'Introduceti un numar caruia doriti sa ii aflati multiplii:',
);
var bottomLimit = prompt(
  `Introduceti numarul care indica limita inferioara a multiplilor lui ${userNumber}.`,
);
var upperLimit = prompt(
  `Introduceti numarul care indica limita superioara a multiplilor lui ${userNumber}.`,
);

do {
  if (i % userNumber === 0 && i > bottomLimit) {
    console.log(i);
  }

  i++;
} while (i < upperLimit);
