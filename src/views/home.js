import { redirect } from '../utils.js';

export default (username) => {
  const welcomeMsg = `
  <button id="sign-out">salir</button>
    <p>¡Bienvenidx, ${username}!</p>`;
  document.getElementById('root').innerHTML = welcomeMsg;

  const signOutBtn = document.getElementById('sign-out');
  signOutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      redirect('login');
    });
  });
};
