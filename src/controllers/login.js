
import { loginPage } from '../views/login.js';

export default () => {
  //
  document.getElementById('root').innerHTML = loginPage;
  
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', () => {
    const emailvalue = document.getElementById('email').value;
    const passwordvalue = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(emailvalue, passwordvalue)
      .then(() => {
        console.log('usuario Registrado')
      })
      .catch((error) => {
  
        console.log('error de codigo:' + error.code);
        console.log('mensaje de error:' + error.message);
      })
  })



};

