export const loginPage = `
<div id="inicio">
      <h1>¡Bienvenida, a Poematik!</h1>
      <form class="login" id="content-inicio">
        <input class="radius" type="text" id="email" placeholder="  Email">
        <input class="radius" type="password" id="password" placeholder="  Password">
        <p><button id="boton-ingresar" class="radius" type="button" onClick="window.location.href = '/#/home'"> Log in </button></p>
        <p>O bien ingresa con...</p>
        <div><img class="logo" src="img/facebook.png" alt="logo de facebook">
          <img class="logo" src="img/google.png" alt="logo de google"></div>
        <label class="registrate">¿No tienes una cuenta? <strong>Registrate</strong></label>
      </form>
    </div>
`;
