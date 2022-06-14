var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    scsss: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
    andra: {
      name: 'Andra',
      surname: 'Andrason',
      age: 27,
    },
  },
};

console.warn(
  `1.Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma: person.name cunoaste: html. person.name cunoaste: javaScript.`,
);
var skillKeys = Object.keys(person.skills);
skillKeys.forEach(function (skill) {
  if (person.skills[skill] !== true) {
    return;
  }
  console.log(`${person.name} cunoaste: ${skill}.`);
});

console.warn(`
2.Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor. `);
Object.keys(person.friends)
  .reverse()
  .forEach(function (friendName) {
    var friend = person.friends[friendName];

    console.log(`${friend.surname} ${friend.name}`);
  });

console.warn(`
3.Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()
`);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (friendName, index, friendNames) {
  var friend = person.friends[friendName];

  var punctuation = ', ';
  var friendsCount = friendName.length;
  if (friendsCount - 2 === index) {
    punctuation = ' si ';
  }
  if (friendsCount - 1 === index) {
    punctuation = '.';
  }
  message += `${friend.name}${punctuation}`;
});
console.log(message);

console.warn(`
4.Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

console.warn(`
5.Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.
`);

var skillKeys = Object.keys(person.skills);
skillKeys.forEach(function (skill) {
  console.log(skill);
});

console.warn(`
6.Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
`);

Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];
  console.log(`${friend.name} ${friend.surname}`);
});
// 7
console.warn(`
7.Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()
`);

var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (friendName, index, friendNames) {
  var friend = person.friends[friendName];
  var punctuation = ', ';
  var friendsCount = friendName.length;
  if (friendsCount === index - 1) {
    punctuation = ' si';
  }
  if (friendsCount === index - 2) {
    punctuation = '.';
  }
  message += `${friend.name} ${friend.surname} ${punctuation}`;
});
console.log(message);

console.warn(`
8.Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”
`);
Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];
  var friendsCount = friendName.length;
  for (i = 0; i < friendsCount; i++) {
    friendName = friendName[0].toUpperCase() + friendName.slice(1);
    console.log(`${friendName} are ${friend.age} ani.`);
  }
});
