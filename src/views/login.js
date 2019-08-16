export const loginPage = `
  <figure>
      <img class="main-img" src="src/img/poetik-logo.png" alt="Poetik">
  </figure>
  <div class="flex-column flex">
    <h4 class= "color4"> Para la mayor parte de la historia, “Anónimo” era una mujer. </h4>

        <span id="error"></span>
      
    <form class="margin">
      
      <input class="inputs block" type="email" id="email" autocomplete="email" placeholder="Email" required />
      <input class="inputs block" autocomplete="" type="password" id="password" placeholder="Password"  required />
      <div>
        <input type="submit" value="Log in" class="font-size buttons block color2 text-color" id="button-login" >
      </div>
      <span class="margin text-color">O bien ingresa con...</span>
      <div class="login-icons">
      <button type="submit" id="google" class="buttons-icons"><img src="src/img/google.png" alt="x" class="social-media-img" /></button>
      <button type="submit" id="fb" class="buttons-icons"><img src="src/img/facebook.png" alt="x"  class="social-media-img" /></button>      
      </div>
      <div class="">
        <p class="">¿No tienes una cuenta? 
          <a class="" href="#/register" id="registrate">Registrate</a>
        </p>
      </div>
    </form>
  </div>
`;

// <a id="fb" href= "#/home"><img class="social-media-img" src='/src/img/fb.svg'></img></a>
