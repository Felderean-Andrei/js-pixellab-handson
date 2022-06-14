const calculateRectangleArea = (length, width) => {
  const surface = length * width;

  return surface;
};

console.warn(`1.Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5. “Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredSurface = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredSurface} metri patrati.`);

console.warn(`2.Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (length) => {
  return calculateRectangleArea(length, length);
};
console.log(calculateSquareArea(5));

console.warn(
  `3.Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”`,
);

const bigWall = calculateRectangleArea(12, 2.5);
const shortWall = calculateRectangleArea(9, 2.5);
const totalWallSurface001 = (bigWall + shortWall) * 2;
const doorSurface001 = calculateRectangleArea(3, 2);
const windowSurface001 = calculateRectangleArea(3, 2);
const totalWallpaper001 =
  totalWallSurface001 - doorSurface001 - windowSurface001;
console.log(
  `Suprafata de tapet necesara este: ${totalWallpaper001} metri patrati.`,
);

console.warn(
  `4.Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea()`,
);
const aggregateSurfaceArea = (h1, w1, h2, w2) => {
  var firstRectangle = calculateRectangleArea(w1, h1);
  var secondRectangle = calculateRectangleArea(w2, h2);
  return firstRectangle + secondRectangle;
};

console.warn(
  `5.Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. `,
);
// var firstRectangle=aggregateSurfaceArea(48,92)
// var secondRectangle=aggregateSurfaceArea(51,102)
// var sumRectangles = firstRectangle + secondRectangle;
// console.log(sumRectangles);

console.log(aggregateSurfaceArea(48, 92, 51, 102));
