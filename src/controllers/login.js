
import loginPage from '../views/login.js';
import {
  login, addUserToFirestore, registerUserGoogle, registerUserFacebook,
} from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';

export default () => {
  loginPage();
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await login(email, password);
      redirect('home');
    } catch (error) {
      errorController(error.code);
    }
  });

  const clickGoogle = document.getElementById('google');
  clickGoogle.addEventListener('click', async () => {
    const {
      name, email, uid, error, code,
    } = await registerUserGoogle();
    if (error) {
      errorController(code);
    } else {
      await addUserToFirestore(email, name, uid);
      redirect('home');
    }
  });

  const clickFacebook = document.getElementById('fb');
  clickFacebook.addEventListener('click', async () => {
    const {
      name, email, uid, error, code,
    } = await registerUserFacebook();
    if (error) {
      errorController(code);
    } else {
      await addUserToFirestore(email, name, uid);
      redirect('home');
    }
  });
};
