import home from './home.js';
import login from './login.js';

export const getName = (user) => {
  home(user);
};

export const getLogin = () => {
  login();
};
