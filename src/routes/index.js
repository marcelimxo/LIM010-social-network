import loginController from '../controllers/login.js';
import registerController from '../controllers/register.js';
import homeController from '../controllers/home.js';
import { getUserInfo } from '../models/users.js';
import { redirect } from '../utils.js';


export default () => {
  const routerSwitch = async () => {
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
        if (!await firebase.auth().currentUser) {
          redirect('login');
        } else {
          const { uid } = await firebase.auth().currentUser;
          const { name } = await getUserInfo(uid);

          homeController(name);
        }
        break;

      default:
        document.getElementById('root').innerHTML = '404 not found';
        break;
    }
  };

  window.addEventListener('hashchange', () => {
    console.log('hola router');
    routerSwitch();
  });

  routerSwitch();
};
