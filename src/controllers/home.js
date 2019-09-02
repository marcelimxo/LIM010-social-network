import { showHome } from '../views/home.js';
import { getUserInfo } from '../models/users.js';
import {
  addPost, getPost, deletePost, editTextPost, addLikes, editStatusPost,
} from '../models/posts.js';


export default async () => {
  const { uid } = await firebase.auth().currentUser;
  const { name } = await getUserInfo(uid);

  const addPostOnSubmit = (evt) => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(() => {
      const inputText = document.getElementById('post-text');
      if (inputText.value !== '') {
        if (uid) {
          const select = document.getElementById('select').value;
          inputText.classList.remove('post-error');
          let status;
          if (select === 'true') {
            status = true;
          } else {
            status = false;
          }
          addPost(inputText.value, uid, status);
          inputText.value = '';
        }
      } else {
        inputText.classList.add('post-error');
        inputText.addEventListener('input', () => {
          if (inputText.value !== '') {
            inputText.classList.remove('post-error');
          } else if (inputText.value === '') {
            inputText.classList.remove('post-error');
          } else {
            inputText.classList.add('post-error');
          }
        });
      }
    });
  };

  const listenersFunctions = () => {
    const btnPost = document.getElementById('button-post');
    btnPost.addEventListener('click', addPostOnSubmit);

    const post = document.getElementById('post');

    post.addEventListener('click', async (event) => {
      const key = (event.target.id);
      if (key.includes('del')) {
        const uidPost = key.slice(4, 24);
        await deletePost(uidPost);
      } else if (key.includes('likes')) {
        const uidPost = key.slice(6, 26);
        const likeCount = await addLikes(uidPost);
        document.getElementById(`likes-count-${uidPost}`).innerHTML = likeCount;
        /*       } else if (key.includes('select')) {
        const uidPost = key.slice(7, 27);
        const select = document.getElementById(`select-${uidPost}`).value;
        let status;
        if (select === 'true') {
          status = true;
        } else {
          status = false;
        }
        await editStatusPost(uidPost, status); */
      } else if (key.includes('edit')) {
        const uidPost = key.slice(5, 26);
        const postText = document.getElementById(`text-${uidPost}`);
        postText.removeAttribute('disabled');
        postText.focus();

        postText.addEventListener('keydown', async (evnt) => {
          if (evnt.keyCode === 13) {
            await editTextPost(uidPost, postText.value);
            postText.setAttribute('disabled', '');
          }
        });
      }
    });

    document.querySelectorAll('select').forEach(postStatus => postStatus.addEventListener('change', (e) => {
      const postId = e.target.id;
      const uidPost = postId.slice(7, 27);
      let status;
      if (postId.indexOf('select') === 0) {
        if (postStatus.value === 'true') {
          status = true;
        } else {
          status = false;
        }
      }
      editStatusPost(uidPost, status);
    }));
  };
  const getInfo = arr => showHome(name, arr, listenersFunctions);
  getPost(getInfo);
};
