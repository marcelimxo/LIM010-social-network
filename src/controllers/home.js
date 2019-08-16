import homePage from '../views/home.js';
import { redirect } from '../utils.js';

export default async (user) => {
  homePage(user);

  const whoIsLogged = firebase.auth().currentUser;

  if (whoIsLogged) {
    // User is signed in.
    /*     console.log(`Data: ${whoIsLogged.providerData}`); */
    // eslint-disable-next-line no-console
    console.log(whoIsLogged);
  }

  const signOutBtn = await document.getElementById('sign-out');
  signOutBtn.addEventListener('click', async () => {
    await firebase.auth().signOut();
    // console.log('cerraste sesión');
    redirect('login');
    document.location.reload();
  });
};
