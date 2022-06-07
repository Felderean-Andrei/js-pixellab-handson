var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
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

console.warn(`
  1 Folosind obiectul person si forEach, afiseaza
  skillurile din pozitiile impare ale arrayului.
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`2 In mod similar, afiseaza skillurile care contin litera a.`);
person.skills.forEach((skill, i, skills) => {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(
  `3 Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);
var sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  let punctuation = ', ';
  var { name, surname } = friend;
  var friendsLength = friends.length;

  if (i === friendsLength - 2) {
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += `${name} ${surname}${punctuation}`;
});
console.log(sentence);

console.warn(
  `4 Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.`,
);
var friendsAgeSum = 0;

person.friends.forEach((friend) => {
  var { age } = friend;

  if (age >= 30) {
    friendsAgeSum += age;
  }
});
console.log(friendsAgeSum.toString());

console.warn(
  `5 Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara.`,
);
var friendsBirthYearSum = 0;

person.friends.forEach((friend) => {
  var { age } = friend;
  var friendBirthYear = new Date().getFullYear() - age;

  if (age % 2 !== 0) {
    friendsBirthYearSum += friendBirthYear;
  }
});
console.log(friendsBirthYearSum.toString());

console.warn(
  `6 Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.`,
);
var personAge = person.age;

person.friends.forEach((friend) => {
  var { age } = friend;
  var ageDiff = Math.abs(personAge - age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
  7 Afiseaza fraza: "Intre Dragos si Larry este o
  diferenta de xx ani. Intre Dragos si Steven... "
`);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  // v2 concatenare
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.warn(`
  8 Folosind metoda reverse si apoi forEach, afiseaza
  in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `9 Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);

console.warn(`10 In mod similar, afiseaza skillurile care nu incep cu j.`);
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) {
    console.log(skill);
  }
});

console.warn(
  `11 Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);
sentence = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach((friend, i, friends) => {
  var { surname } = friend;
  var punctuation = ', ';

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  sentence += `${surname}${punctuation}`;
});
console.log(sentence);

console.warn(
  `12 Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
friendsAgeSum = 0;

person.friends.forEach((friend) => {
  var { age } = friend;

  friendsAgeSum += age;
});
console.log(friendsAgeSum.toString());

console.warn(
  `13 Folosind forEach, afiseaza suma anilor de nastere a persoanelor`,
);
friendsBirthYearSum = 0;

person.friends.forEach((friend) => {
  var { age } = friend;
  var friendBirthYear = new Date().getFullYear() - age;

  friendsBirthYearSum += friendBirthYear;
});
console.log(friendsBirthYearSum.toString());

console.warn(
  `14 Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);
var personAge = person.age;

person.friends.forEach((friend) => {
  var { age } = friend;
  var ageDiff = Math.abs(personAge - age);

  if (ageDiff >= 0) {
    console.log(ageDiff);
  }
});

console.warn(
  `Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);
person.friends
  .slice()
  .reverse()
  .forEach((friend) => {
    var { name, surname } = friend;

    console.log(`${name} ${surname}`);
  });
