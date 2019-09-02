import { template } from '../utils.js';

const showPost = (doc, id) => {
  const deleteButton = doc.uid === firebase.auth().currentUser.uid ? `<button class="buttons btn-delete-post" id="del-${id}"></button>` : '';

  const editButton = doc.uid === firebase.auth().currentUser.uid ? `<button class="buttons btn-edit-post" id="edit-${id}"></button>` : '';

  const editPrivacity = doc.uid === firebase.auth().currentUser.uid ? ` <select id="select-${id}" class="buttons btn-status">
  <option value="true" ${doc.public ? 'selected' : ''}>Público</option>
  <option value="false" ${!doc.public ? 'selected' : ''}>Privado</option>
</select>` : '';

  const options1 = {
    month: 'long', day: 'numeric', year: 'numeric',
  };

  const options2 = {
    hour12: 'true', hour: 'numeric', minute: 'numeric',
  };

  const date = new Date(doc.date.toDate()).toLocaleDateString('es-ES', options1);

  const hour = new Date(doc.date.toDate()).toLocaleTimeString('es-ES', options2);

  const likeCount = async () => {
    const gettingInfo = await firebase.firestore().collection('posts').doc(`${id}`).get();
    const likeCounter = gettingInfo.data().reactionlike;
    document.getElementById(`likes-count-${id}`).innerHTML = likeCounter;
  };
  // todo: colocarle al de content lo mismo que al de likes

  const postsContainer = `
          <div class="post-header" id='post-${id}'>
            <div class="post-author-title">
                <span class="post-user">${doc.nameUser}</span> 
            </div>
            ${editButton}
           ${deleteButton}
          </div>
          <textarea type="text" id="text-${id}" class="post" disabled>${doc.content}</textarea>
          ${editPrivacity}
          <div class="post-footer">
            <button id="likes-${id}" class="buttons btn-likes">
            </button>
            <span class="post-counter" id="likes-count-${id}"></span>
            <span class="post-date">${date} - ${hour}</span>
          </div>`;
  const listItem = document.createElement('div');
  listItem.className = 'post-container';
  listItem.innerHTML = postsContainer;
  likeCount();

  return listItem;
};

const showHome = (username, arr, cb) => {
  const homePage = `<nav role="navigation" >
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>

  <div class="xs-hide">
    <a href="#/profile"> ${username}</a>
  </div>

  <div class="logo">
    <img src="src/img/poetik-logo.png" alt="Poetik">
  </div>

  <ul class="nav-links xs-hide">
    <li>
      <a href="#/sign-out">
        <img src="src/img/logout.png" alt="cerrar sesión" class="sign-out-icon"> Cerrar sesión</a>
    </li>
  </ul>

</nav>

<div class="burger-menu" id="menu">
  <ul>
    <li>
      <a href="#/profile"> ${username}</a>
    </li>
    <li>
      <a href="#/sign-out">
        <img src="src/img/logout.png" alt="cerrar sesión" class="sign-out-icon"> Cerrar sesión</a>
    </li>

  </ul>
</div>

<div class="home-container">

  <div class="left">

    <div class="user-info">
      <div class="user-img">
        <img src="https://placekitten.com/100/100" alt="user">
      </div>
      <p>${username}</p>
    </div>

  </div>

  <div class="right">

    <div class="new-post-container">

      <textarea type="text" id="post-text" class="post" placeholder="¿Qué quieres compartir?" required></textarea>
          <select id="select" class="buttons btn-status" >
            <option value="true" selected>Público</option>
            <option value="false">Privado</option>
          </select>
      <button id="button-post" class="buttons btn-post">Compartir</button>
    </div>

    <div id="post"></div>

  </div>

</div>`;
  document.getElementById('root').classList.remove('container');
  document.getElementById('body').classList.add('body-home');

  template(homePage);

  const posts = document.getElementById('post');
  arr.forEach((post) => {
    posts.prepend(showPost(post.data, post.idpost));
  });
  cb();
};

export {
  showHome, showPost,
};
