import { template } from '../utils.js';

export default () => {
  const registerPage = ` 
<div class="margin flex-column flex published-post"  >
  <div class="subtitle"> 
    <h4>Crea una cuenta</h4> 
  </div>
      <div id="error-container">
      <span id="error"></span>
      </div>
      <form class="form">
        <input class="inputs" type="text" autocomplete="name"  name="name" id="name-signup" placeholder="Nombre">
        <input class="inputs" autocomplete="email" type="email" name="email" id="email-signup" placeholder="Email">
        <input class="inputs" type="password" name="password" id="password-signup" placeholder="Password" autocomplete >
        <div>
          <input type="submit" value="Registro" class="buttons" id="button-register" >
        </div>
        <a href="#/login">Regresar al login</a>
      </form>
   `;

  template(registerPage);
  document.getElementById('root').classList.add('container');
};
