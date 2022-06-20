const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const eventListener = () => {
  alert('Ai apasat butonul');
};

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});

const queryButton = document.getElementById('query');
const paragraphElement = document.getElementById('message');

queryButton.addEventListener('click', () => {
  const age = prompt('Introdu varsta');
  const message = `Ai ${age} ani.`;

  console.log(message);
  paragraphElement.innerText = message;
});
