import homePage from '../views/home.js';
import { redirect } from '../utils.js';


export default async (user) => {
  homePage(user);

  const currentUser = firebase.auth().currentUser;

  if (currentUser) {
  // User is signed in.
    console.log(currentUser.providerData);
  }

  const signOutBtn = await document.getElementById('sign-out');
  signOutBtn.addEventListener('click', async () => {
    await firebase.auth().signOut();
    // console.log('cerraste sesión');
    redirect('login');
    document.location.reload();
  });
};
