
import { loginPage } from '../views/login.js';
import { login } from '../models/users.js';
import errorController from './errors.js';


export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = loginPage;

  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error, code } = login(email, password);
    if (error) {
      errorController(code);
    }
  });
};
