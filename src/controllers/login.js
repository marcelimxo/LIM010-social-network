
import { loginPage } from '../views/login.js';
import { login, registerUserGoogle } from '../models/users.js';
import errorController from './errors.js';
import homePage from '../views/home';


export const homeController = async (user) => {
  homePage(user);

  const signOutBtn = await document.getElementById('sign-out');
  signOutBtn.addEventListener('click', async () => {
    await firebase.auth().signOut();
    loginController();
  });
};

const root = document.getElementById('root');
root.classList.add('container');

const insertRoot = (div) => {
  root.innerHTML = div;

  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { name, error, code } = await login(email, password);
    if (error) {
      errorController(code);
    } else {
      await homeController(name);
    }
  });

  const clickGoogle = document.getElementById('google');
  clickGoogle.addEventListener('click', async () => {
    const { name, error, code } = await registerUserGoogle();
    if (error) {
      errorController(code);
    } else {
      await home(name);
    }
  });
};


export const loginController = async () => {
  insertRoot(loginPage);
};
