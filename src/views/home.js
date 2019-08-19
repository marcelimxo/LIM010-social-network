/* eslint-disable padded-blocks */
import { redirect } from '../utils.js';
import {
  addPost, getPost, editTextPost,
} from '../models/posts.js';

export default (username) => {
  const welcomeMsg = `
    <p>¡Bienvenidx, ${username}!</p>
    <button id="sign-out">salir</button>
    <div  class= "conten">
      <h5>Crear Post</h5>
      <textarea  type="text" id = "post-text" placeholder="¿Qué estás pensando?" class="input-post"></textarea>
      <button id="button-post">PUBLICAR</button>

    </div>`;
  document.getElementById('root').innerHTML = welcomeMsg;

  const signOutBtn = document.getElementById('sign-out');
  signOutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      redirect('login');
    });
  });

  const addPostOnSubmit = (evt) => {
    evt.preventDefault();
    const { uid } = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(() => {
      if (uid) {
        const inputText = document.getElementById('post-text');
        const inputSpace = '                                                                                ';
        const inputTrim = inputSpace.trim();
        if (inputText.value === '' || inputText.value === inputTrim || inputText.value === ' ') {
          alert('Ingresa un contenido');
        } else {
          addPost(inputText.value, uid);
          inputText.value = '';
        }
      }
    });
  };

  const btnPost = document.getElementById('button-post');
  btnPost.addEventListener('click', addPostOnSubmit);


  getPost();
  const id = 'Z4WpIQpoBXS7P1pva7RD';

  editTextPost(id, 'Mujeres al poder');

};
