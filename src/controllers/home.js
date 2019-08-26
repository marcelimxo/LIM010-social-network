import { showHome, showPost } from '../views/home.js';
import { getUserInfo } from '../models/users.js';
import { addPost, getPost, deletePost } from '../models/posts.js';

export default async () => {
  const { uid } = await firebase.auth().currentUser;
  const { name } = await getUserInfo(uid);
  const getInfo = arr => showHome(name, arr);
  getPost(getInfo);

  console.log('antes de la funcion');
  const addPostOnSubmit = (evt) => {
    console.log('boton compartir');
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(() => {
      if (uid) {
        const inputText = document.getElementById('post-text');
        addPost(inputText.value, uid);
        inputText.value = '';
      }
    });
  };
  const btnPost = document.getElementById('button-post');
  btnPost.addEventListener('click', addPostOnSubmit);

  const post = document.getElementById('post');

  console.log('antes de eliminar');
  post.addEventListener('click', (event) => {
    console.log('boton eliminar');
    const key = (event.target.id);
    deletePost(key);
  });
};
