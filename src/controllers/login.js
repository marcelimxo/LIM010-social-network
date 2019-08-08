import { loginPage } from '../views/login.js';

export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = loginPage;
};
