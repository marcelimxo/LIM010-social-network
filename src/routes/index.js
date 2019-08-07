import loginController from '../controllers/login.js';

export default () => {
  const routerSwitch = () => {
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');

    switch (currentRoute) {
      case '/login':
        loginController();
        break;
      case '/home':
        document.getElementById('root').innerHTML = 'aqui va el home';
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
