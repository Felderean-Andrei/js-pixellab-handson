var person = {
  name: 'Andrei',
  surname: 'Felderean',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.carol = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

carol.friends.andra = andra;
andra.friends.carol = carol;

delete person.friends.larry;
delete larry.friends.person;

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
