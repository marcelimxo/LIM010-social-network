// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template de la vista del perfil
const profilePageView = (user) => {
  const profilePage = `  <div id="profile-container" class="container">

  <div class="profile-user-avatar">
    <div class="user-img">
      <img src="https://placekitten.com/100/100" alt="User picture">
    </div>
    <div class="user-img-info">
      <p>${user.displayName}</p>
      <p>${user.email}</p>
      <p>Avatar por: <a href="https://placekitten.com">placekitten.com</a>. O sube el propio...</p>
      <progress value="0" max="100" id="uploader">0%</progress>
      <label class="file">
          <input type="file" id="file" aria-label="File browser example">
          <span class="file-custom"></span>
        </label>
    </div>
  </div>

  <form id="profile-info">
    <div class="profile-form-group">
      <label for="Name">Nombre:</label>
      <div class="profile-inputs">
        <input type="text" value="Nombre" name="Name">
      </div>
    </div>
    <div class="profile-form-group">
      <label for="Email" class="profile-form-label">Email:</label>
      <div class="profile-inputs">
        <input type="email" name="Email" value="${user.email}" disabled>
      </div>
    </div>
    <div class="profile-form-group">
      <label for="password">Contraseña:</label>
      <div class="profile-inputs">
        <input type="password" name="Password" id="password" value="123456789">
      </div>
    </div>
    <input type="submit" value="Actualizar" class="buttons btn-post" id="submit">
    
  </form>

</div> `;

  template(profilePage);
  document.getElementById('root').classList.add('container');
};

export {
  profilePageView,
};
