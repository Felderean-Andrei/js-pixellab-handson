var object = {
  name: 'Andrei',
  surname: 'Felderean',
  age: 21,
  petOwner: true,
  carOwner: true,
};

console.log(object.name);
console.log(object.age.toString());

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log(``);

console.log((2022 - object.age).toString());

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(object.name + ' s-a nascut in ' + (2022 - object.age) + '.');
