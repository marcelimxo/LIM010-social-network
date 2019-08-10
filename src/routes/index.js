//import loginController from '../controllers/login.js';
import registerController from '../controllers/register.js';
//import {homeController} from '../controllers/home.js';
import { redirect } from '../utils.js';
import { loginController, homeController } from '../controllers/home.js';

export default () => {
  const routerSwitch = () => {
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');
    switch (currentRoute) {
      case '/login':
        loginController();
        break;
      case '/register':
        registerController();
        break;
      case '/home':
        if (!firebase.auth().currentUser) {
          redirect('login');
        } else {
          homeController();
        }

        break;
      default:
        document.getElementById('root').innerHTML = '404 not found';
        break;
    }
  };

  window.addEventListener('hashchange', () => {
    routerSwitch();
  });

  routerSwitch();
};
