
import { loginPage } from '../views/login.js';
import {
  login, addUserToFirestore, registerUserGoogle, registerUserFacebook,
} from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';


export default async () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = loginPage;

  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error, code } = await login(email, password);
    if (error) {
      errorController(code);
    } else {
      redirect('home');
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
