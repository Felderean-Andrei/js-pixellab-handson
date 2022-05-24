var object = {
  name: 'Andrei',
  surname: 'Felderean',
  age: 21,
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
