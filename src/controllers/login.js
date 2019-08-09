
import { loginPage } from '../views/login.js';

export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = loginPage;

  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario Registrado');
      })
      .catch((error) => {
        console.log(`error de codigo:${error.code}`);
        console.log(`mensaje de error:${error.message}`);
      });
  });

  
};
