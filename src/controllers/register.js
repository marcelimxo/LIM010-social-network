import { registerPage } from '../views/register.js';

export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = registerPage;

  const buttonLogin = document.getElementById('button-register');
  buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario Registrado');
      })
      .catch((error) => {
        console.log(`error de codigo:${error.code}`);
        console.log(`mensaje de error:${error.message}`);
      });
  });
};
