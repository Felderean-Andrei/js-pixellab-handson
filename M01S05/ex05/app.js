const person = {
  getName: function () {
    return 'Ion Iliescu';
  },
  getAge: () => {
    return 110;
  },
};

console.warn(`1.Afiseaza primul nume al persoanei folosind metoda getName()`);
const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

console.warn(
  `2.Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent`,
);
const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.warn(
  `3.Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`4.Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
console.log(`Ma numesc ${personName} si am ${person.getAge()} ani.`);

console.warn(`5.Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(person.getName());

console.warn(`6.Afiseaza varsta persoanei folosind metoda getAge()
`);
console.log(person.getAge().toString());

console.warn(`7.Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
`);
console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(`8.Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${personName} m-am nascut acum ${person.getAge()} in anul ${personBirthYear}!`,
);
