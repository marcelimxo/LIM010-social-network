import registerPage from '../views/register.js';
import { registerWithEmail, addUserToFirestore } from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';

export default () => {
  registerPage();

  const registerBtn = document.getElementById('button-register');
  registerBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let registeredName = document.getElementById('name-signup').value;
    let registeredEmail = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    const {
      email, uid, error, code,
    } = await registerWithEmail(registeredEmail, password);

    if (error) {
      registeredName = '';
      registeredEmail = '';
      password = '';
      return errorController(code);
    }
    await addUserToFirestore(email, registeredName, uid);
    return redirect('home');
  });
};
