var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// 1.
console.warn(
  `1.Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);
for (var i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

// 2.
console.warn(`
2.In mod similar, afiseaza skillurile care NU incep cu j.
`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

// 3.
console.warn(`
3.Folosind un for afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

// 4
console.warn(
  `4.Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

var ageTotal = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friend_age = friend.age;

  if (friend_age >= 30) {
    ageTotal += friend_age;
  }
}
console.log(ageTotal.toString());

// 5
console.warn(
  `
    5.Folosind un for, afiseaza suma anilor de nastere a persoanelor.
  `,
);
var ageSum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  ageSum += friend.age;
}
console.log(ageSum.toString());

// 6.
console.warn(`
  6.Afiseaza diferenta de varsta dintre persoana
  si prietenii din arrayul friends doar daca
  aceasta este mai mare de 2 ani.
`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

// 7
console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var age = friend.age;
  if (age % 2 != 0) {
    var ageDiff = Math.abs(person.age - age);
    console.log(
      'Intre ' +
        person.name +
        ' si ' +
        friend.name +
        ' este o diferenta de ' +
        ageDiff +
        ' ani.',
    );
  }
}

// 8.
console.warn(`
  8.Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele
  arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

// 9.
console.warn(`
9.Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
`);
for (var i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}

// 10
console.warn(
  `
  In mod similar, afiseaza skillurile care incep cu c
  `,
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (skill.startsWith('c') === true) {
    console.log(skill);
  }
}

//11
console.warn(
  `
  Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
  `,
);
var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var surname = friend.surname;
  var punctuation = ', ';

  if (i == person.friends.length - 1) {
    punctuation = '.';
  }
  message += surname + punctuation;
}
console.log(message);

// 12
console.warn(`
12.Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);
var ageSum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var birthYear = 2022 - friend.age;
  ageSum += birthYear;
}
console.log(ageSum.toString());

// 13
console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

var ageDiff = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  ageDiff = Math.abs(person.age - friend.age);
  console.log(ageDiff);
}

// 14
console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);

var ageDiff = 0;
var message = '';
var punctuation = '. ';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  ageDiff = Math.abs(person.age - friend.age);
  if (i == person.friends.length - 1) {
    punctuation = '.';
  }
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani' +
    punctuation;
}
console.log(message);

// 15
console.warn(`
Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
`);

var message = 'Prietenii mei sunt: ';
var punctuation = ', ';

for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  if (i == 0) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);
