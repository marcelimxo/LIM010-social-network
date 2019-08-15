export default (username) => {
  const welcomeMsg = `
  <button id="sign-out">salir</button>
    <p>¡Bienvenidx, ${username}!</p>`;
  document.getElementById('root').innerHTML = welcomeMsg;
};
