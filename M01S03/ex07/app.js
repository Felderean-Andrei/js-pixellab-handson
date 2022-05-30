var person = {
  firstName: 'Andrei',
  lastName: 'Felderean',
  email: 'feldereanandrei2@gmail.com',
  birthYear: 2001,
  pets: [
    {
      name: 'Caty',
      species: 'Labrador',
      age: 15,
    },
    {
      name: 'Dana',
      species: 'Cocker Spaniel',
      age: 11,
    },
    {
      name: 'Mia',
      species: 'Beagle',
      age: 1,
    },
  ],
  zipCode: '20301',
};

console.warn(`
  Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”.
  Nu uita de proprietatea length a arrayului pets.
`);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
`);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);

console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0
  si afiseaza aceasta diferenta.
  Foloseste anul curent.`,
);

console.log((2022 - person.pets[0].age - person.birthYear).toString());

var difference = 2022 - person.pets[0].age - person.birthYear;
var petName = person.pets[0].name;

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

var prop01Element = document.getElementById('prop01');
var prop02Element = document.getElementById('prop02');
var prop03Element = document.getElementById('prop03');
var prop04Element = document.getElementById('prop04');

prop01Element.innerText = person.firstName;
prop02Element.innerText = person.pets[0].name;
prop03Element.innerText = person.pets[1].name;
prop04Element.innerText = person.pets[2].name;
