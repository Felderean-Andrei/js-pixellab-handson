var person = {
  getName: function () {
    return 'Sorin Papa';
  },
  getAge: function () {
    return 39;
  },
};

function accesor(methodSuffix) {
  var methodName = 'get' + methodSuffix;
  return person[methodName]();
}

console.warn(`1.Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
var personName = accesor('Name');
console.log(`Eu sunt ${personName}.`);

console.warn(`2.Afiseaza anul de nastere al persoanei folosind anul curent.`);
var personBirthYear = new Date().getFullYear() - accesor('Age');
console.log(personBirthYear);

console.warn(`3.Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
var personAge = accesor('Age');
console.log(
  `Ma numesc ${personName}, am ${personAge} ani si m-am nascut in anul ${personBirthYear}.`,
);

console.warn(`5.Folosind accesorul afiseaza numele persoanei.`);
console.log(personName);

console.warn(`6.Afiseaza varsta persoanei.`);
console.log(personAge);

console.warn(`7.Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
`);
console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(`8.Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${personName} si am ${personAge} ani!`);
