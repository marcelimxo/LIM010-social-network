// Aquí importamos las funciones que vamos a usar
import registerPage from '../views/register.js';
import { registerWithEmail, addUserToFirestore } from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';

export default () => {
  // Mostramos nuestra vista de registro
  registerPage();

  // Aquí se capturan los datos del usuario a registrar.
  const registerBtn = document.getElementById('button-register');
  registerBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let registeredName = document.getElementById('name-signup').value;
    let registeredEmail = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    const {
      email, uid, error, code,
    } = await registerWithEmail(registeredEmail, password);

    // Probamos los posibles errores
    if (error) {
      registeredName = '';
      registeredEmail = '';
      password = '';
      return errorController(code);
    }
    // Añadimos a nuestra base de datos
    await addUserToFirestore(email, registeredName, uid);
    // Redireccionamos a Home
    return redirect('home');
  });
};
