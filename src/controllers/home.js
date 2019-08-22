import homePage from '../views/home.js';
import { getUserInfo } from '../models/users.js';
import { addPost, deletePost } from '../models/posts.js';

export default async () => {
  const { uid } = await firebase.auth().currentUser;
  const { name } = await getUserInfo(uid);

  homePage(name);

  const btnPost = document.getElementById('button-post');

  const addPostOnSubmit = (evt) => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(() => {
      if (uid) {
        const inputText = document.getElementById('post-text');
        addPost(inputText.value, uid);
        inputText.value = '';
      }
    });
  };

  btnPost.addEventListener('click', addPostOnSubmit);
};
