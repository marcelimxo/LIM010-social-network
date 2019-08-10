export default (username) => {
  const welcomeMsg = `¡Bienvenidx, ${username}!`;
  document.getElementById('root').innerHTML = welcomeMsg;
};
