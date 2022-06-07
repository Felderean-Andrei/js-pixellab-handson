var globalVariable = 'Ma aflu in contextul global';

if (true) {
  const localVariable = 'Ma aflu in contextul local';
  let globalVariable = 'NU ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}
