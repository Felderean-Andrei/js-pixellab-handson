var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`1.Folosind codul din Ex 14 -Done `);
console.warn(`2.Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  console.log(pet.name);
});

console.warn(`3.Folosind o bucla for afiseaza suma anilor animalelor.`);
var sumPetsAges = 0;
Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];
  sumPetsAges += pet.age;
});
console.log(sumPetsAges);

console.warn(
  `4.Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `5.Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);
Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  var personAge = new Date().getFullYear() - person.birthYear;
  var ageDiff = personAge - pet.age;
  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `6.Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.`,
);
Object.keys(person.pets)
  .reverse()
  .forEach(function (petsName) {
    var pet = person.pets[petsName];
    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(
  `7.Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.`,
);

var petAge = 0;
var personAge = new Date().getFullYear() - person.birthYear;

for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var petName = '';
  var ageDiff = personAge - pet.age;

  if (petAge < pet.age) {
    petAge = pet.age;
  }

  if (pet.age === petAge) {
    petName = pet.name;
  }
}
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `8.Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var punctuation = ', ';
var message = 'Am ';
person.pets.forEach(function (petName, index) {
  if (index === person.pets.length - 1) {
    punctuation = '.';
  }
  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }
  message += petName.species + punctuation;
});
console.log(message);
