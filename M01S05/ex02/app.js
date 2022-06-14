console.warn(`
1.Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3
`);
function calculateRectangleArea(L, l) {
  return L * l;
}
const anothreSquare = calculateRectangleArea(3, 4);
console.log(anothreSquare);

console.warn(`2.Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);
function calculateRectangleAre(L, l) {
  return L * l;
}
var firsRectangleArea = calculateRectangleAre(5, 3);
var secondRectangleAre = calculateRectangleAre(3, 2);
console.log(firsRectangleArea);
console.log(secondRectangleAre);

console.warn(`3.Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);

function squareSurface(l) {
  return Math.pow(l, 2);
}
console.log(squareSurface(3));

console.warn(` 4.Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9
`);
console.log(calculateRectangleArea(12, 9));

console.warn(
  `5.Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.`,
);
console.log(calculateRectangleArea(15, 31));
console.log(calculateRectangleArea(8, 9));
console.log(calculateRectangleArea(10, 5));
