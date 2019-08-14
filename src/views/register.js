export const registerPage = ` 
<div class="margin flex-column flex published-post"  >
      <h1 class="name text-color"> Registrate </h1>
      <span id="error"></span>
      <form class="margin">
      <input class="inputs block" type="text" autocomplete=""  name="name" id="name-signup" placeholder="Nombre">
          <input class="inputs block" autocomplete="email" type="email" name="email" id="email-signup" placeholder="Email">
            <input class="inputs block" type="password" name="password" id="password-signup" placeholder="Password" autocomplete="" >
              <div id="signup-btns">
                <input type="submit" value="Sign up" class="buttons font-size block text-color color2" id="button-register" >
                <a href="#/login" class="home-button margin-right-auto border-none block">Regresar al login</a>
            </div>
          </form>
        </div>
   `;
