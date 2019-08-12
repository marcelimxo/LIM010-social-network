export default (username) => {
  const welcomeMsg = `
  <button id="sign-out">salir</button>
    <p>¡Bienvenidx, ${username}!</p>`;
  document.getElementById('root').innerHTML = welcomeMsg;
};
/* <a id="sign-out">
<img class="social-media-img" src="/src/img/sign-out.svg" alt="sign-out" > </a> */
