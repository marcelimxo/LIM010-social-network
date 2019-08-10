import { registerPage } from '../views/register.js';
import { register } from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';

export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = registerPage;

  const buttonLogin = document.getElementById('button-register');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name-signup').value;
    let email = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    const { error, code } = await register(name, email, password);
    if (error) {
      errorController(code);
      name = '';
      email = '';
      password = '';
    } else {
      redirect('home');
    }
  });
};
