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
  const btnPost = document.getElementById('button-post');
  const addPostOnSubmit = (evt) => {
    evt.preventDefault();
    const { uid } = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(() => {
      if (uid) {
        const inputText = document.getElementById('post-text');
        addPost(inputText.value, uid);
        inputText.value = '';
      }
    });
  };
  btnPost.addEventListener('click', addPostOnSubmit);
  const createNewPostElement = (postString, creatorString, showLikes, datePost) => {
    // Crea los elementos que aparecen en el DOM
    const listItem = document.createElement('div');
    const author = document.createElement('p');
    const date = document.createElement('p');
    const paragraph = document.createElement('p');
    const editArea = document.createElement('textarea');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const likesButton = document.createElement('button');
    const numberLikes = document.createElement('p');
    const time = datePost; // Get the time in miliseconds from post data
    const timeToDate = new Date(time); // Convert the time to string in format UTC
    // Asigna clase a la area de texto para editar
    listItem.className = 'postCard';
    editArea.className = 'hide';
    author.className = 'post-name'; // Quitar camel case
    paragraph.className = 'editMode';
    date.className = 'dateString';
  
    // Asignación de texto y clase a botones
    editButton.innerHTML = '<span class="glyphicon glyphicon-pencil"></span> Editar';
    editButton.className = 'edit';
    deleteButton.innerHTML = '<span class="glyphicon glyphicon-trash"></span> Borrar';
    deleteButton.className = 'delete';
    likesButton.innerHTML = '<span class="glyphicon glyphicon-heart"></span> Me gusta';
    likesButton.className = 'likes';
    numberLikes.className = 'number-likes';
    numberLikes.innerHTML = showLikes;
    author.innerHTML = `<span class="glyphicon glyphicon-user"></span> ${creatorString}`;
    paragraph.innerHTML = postString;
    date.innerHTML = `${timeToDate} <hr>`;
  
    // Añadiendo elementos al DOM
    listItem.appendChild(author);
    listItem.appendChild(date);
    listItem.appendChild(paragraph);
    listItem.appendChild(editArea);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(likesButton);
    listItem.appendChild(numberLikes);
    return listItem;
  };
  const allPost = async   getPost();
  await createNewPostElement(allPost[1].content, allPost[1].userName, allPost[1].reactionlike, allPost[1].date);
};
