import { template } from '../utils.js';


export default (username) => {
  const homePage = `<nav role="navigation">
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>

  <div class="xs-hide">
    <a href="#/profile"> ${username}</a>
  </div>

  <div class="logo">
    <img src="/src/img/poetik-logo.png" alt="Poetik">
  </div>

  <ul class="nav-links xs-hide">
    <li>
      <a href="#/sign-out">
        <img src="/src/img/logout.png" alt="cerrar sesión" class="sign-out-icon"> Cerrar sesión</a>
    </li>
  </ul>

</nav>

<div class="burger-menu" id="menu">
  <ul>
    <li>
      <a href="#/profile"> ${username}</a>
    </li>
    <li>
      <a href="#/sign-out">
        <img src="/src/img/logout.png" alt="cerrar sesión" class="sign-out-icon"> Cerrar sesión</a>
    </li>

  </ul>
</div>

<div class="home-container">

<div class="left">

<div class="user-info">
  <div class="user-img">
    <img src="https://loremflickr.com/100/100" alt="user">
  </div>
  <p>${username}!</p>
</div>

</div>


  <div class="right">

    <div class="new-post-container">

      <textarea type="text" id="post-text" class="post" placeholder="¿Qué quieres compartir?" required></textarea>
      <button id="button-post" class="buttons btn-post">Compartir</button>
    </div>

  </div>`;
  document.getElementById('root').classList.remove('container');
  document.getElementById('body').classList.add('body-home');


  template(homePage);
};
