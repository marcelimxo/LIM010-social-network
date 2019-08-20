import loginController from '../controllers/login.js';
import registerController from '../controllers/register.js';
import homeController from '../controllers/home.js';

import { redirect } from '../utils.js';


export default () => {
  const routerSwitch = async () => {
    const routesWithoutAuth = ['/login', '/register'];
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');
    let next;
    switch (currentRoute) {
      case '/login':
        next = loginController;
        break;
      case '/register':
        next = registerController;
        break;
      case '/home':
        next = homeController;
        break;

      case '/sign-out':
        firebase.auth().signOut().then(() => {
          redirect('login');
        });
        break;
      case '':
        redirect('home');
        return;
      default:
        document.getElementById('root').innerHTML = '404 not found';
        break;
    }

    // middleware
    firebase.auth().onAuthStateChanged((user) => {
      const noAuthNedeed = routesWithoutAuth.find(route => currentRoute === route);
      if (user) {
        if (noAuthNedeed) {
          redirect('home');
        } else {
          next();
        }
      } else if (noAuthNedeed) {
        next();
      } else {
        redirect('login');
      }
    });
  };


  window.onload = () => routerSwitch();

  window.addEventListener('hashchange', () => {
    routerSwitch();
  });
};
