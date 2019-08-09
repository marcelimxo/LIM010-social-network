import loginController from '../controllers/login.js';
import registerController from '../controllers/register.js';
import inicioController from '../controllers/inicio.js';


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
        case '/inicio':
        inicioController();
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
