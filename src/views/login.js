import { template } from '../utils.js';

export default () => {
  const loginPage = `
  <figure>
      <img class="login-logo" src="src/img/poetik-logo.png" alt="Poetik">
  </figure>
  <div>
    <div class="subtitle"> 
      <h4>Para la mayor parte de la historia, “Anónimo” era una mujer.</h4> 
    </div>

    <div id="error-container">
      <span id="error"></span>
    </div>
      
      
    <form class="form">
      
      <input class="inputs " type="email" id="email" autocomplete="email" placeholder="Email" required />
      <input class="inputs" type="password" id="password" autocomplete  placeholder="Password" required />
      <div>
        <input type="submit" value="Log in" class="buttons" id="button-login" >
      </div>
      <span class="text-color">O bien ingresa con...</span>
      <div class="login-icons">
      <button type="submit" id="google" class="buttons-icons"><img src="src/img/google.png" alt="x" class="social-media-img" /></button>
      <button type="submit" id="fb" class="buttons-icons"><img src="src/img/facebook.png" alt="x"  class="social-media-img" /></button>      
      </div>
      <div >
        <p>¿No tienes una cuenta? 
          <a class="" href="#/register" id="registrate">Registrate</a>
        </p>
      </div>
    </form>
  </div>
`;

  template(loginPage);
  document.getElementById('root').classList.add('container');
};
