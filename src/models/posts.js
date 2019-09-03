// Aquí están las funciones donde se manejan los post con la base de datos

// Añade un post a la base de datos.
const addPost = async (textNewPost, uid, privacity) => {
  // Obtenemos la información del creador del Post
  const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();
  const get = firebase.firestore().collection('posts')
    .add({
      uid,
      date: new Date(),
      content: textNewPost,
      nameUser: gettingInfo.data().name,
      public: privacity,
      reactionlike: 0,
    });
  return get;
};

// Obtenemos  los Post
const getPost = (callback) => {
  // Obtenemos el id del usuario logueado
  const id = firebase.auth().currentUser.uid;
  firebase.firestore().collection('posts').orderBy('date', 'asc')
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        if (id === doc.data().uid || doc.data().public === true) {
          arr.push({ data: doc.data(), idpost: doc.id });
        }
      });
      callback(arr);
    });
};

// Cambia la privacidad de los Post
const editStatusPost = async (uidPost, privacity) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).update({
    public: privacity,
  });
  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uidPost}`).get();
  const postStatus = gettingInfo.data().public;
  return postStatus;
};

// Cambia el contenido de un post
const editTextPost = async (uid, text) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).update({
    content: text,
  });

  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const postTextContent = gettingInfo.data().content;
  return postTextContent;
};

// Elimina un post
const deletePost = async (uid) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).delete();
};

// Añade like a un post
const addLikes = async (uid) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).update({
    reactionlike: firebase.firestore.FieldValue.increment(1),
  });

  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const likeCount = gettingInfo.data().reactionlike;
  return likeCount;
};

// Aquí exportamos nuestras funciones
export {
  getPost, editStatusPost, addPost, editTextPost, deletePost, addLikes,
};
