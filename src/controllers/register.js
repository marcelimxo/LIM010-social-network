import { registerPage } from '../views/register.js';
import { registerWithEmail } from '../models/users.js';
import errorController from './errors.js';
import home from './home.js';

export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = registerPage;

  const registerBtn = document.getElementById('button-register');
  registerBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name-signup').value;
    let email = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    const { error, code } = await registerWithEmail(name, email, password);

    if (error) {
      name = '';
      email = '';
      password = '';
      return errorController(code);
    }
    home(name);
  });
};
