export const loginPage = `
  <figure>
      <img class="main-img"  src="src/img/poetik-logo.png" alt="Poetik">
  </figure>
  <div class="flex-column flex">
    <h1> poetik </h1>
    <form class="margin">
      <div class="error">
        <span id="error"></span>
      </div>
      <input class="inputs block" type="email" id="email" placeholder="Email" />
      <input class="inputs block" type="password" id="password" placeholder="Password" />
      <div>
        <input type="submit" value="Log in" class="font-size buttons block color2 text-color" id="button-login" >
      </div>
      <span class="margin text-color">O bien ingresa con...</span>
      <div class="login-icons">        
        <a id="fb"><img class="social-media-img" src='/src/img/facebook.png'></img></a>
        <a id="google"><img class="social-media-img" src='/src/img/google.png'></img></a>
      </div>
      <div class="">
        <p class="">¿No tienes una cuenta? 
          <a class="" href="#/register" id="registrate">Registrate</a>
        </p>
      </div>
    </form>
  </div>
`;

