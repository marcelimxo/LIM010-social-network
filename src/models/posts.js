const addPost = async (textNewPost, uid) => {
  const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();
  firebase.firestore().collection('posts')
    .add({
      UidUser: uid,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      content: textNewPost,
      nameUser: gettingInfo.data().name,
      public: true,
      reactionlike: 0,
    });
};

const getPost = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      callback(doc.data(), doc.id);
    });
  });
};

const editStatusPost = async (uidPost, status) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).update({
    public: status,
  });
};

const editTextPost = async (uidPost, text) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).update({
    content: text,
  });
};

const deletePost = async (uidPost) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).delete();
  console.log('eliminado');
};


export {
  getPost, editStatusPost, addPost, editTextPost, deletePost,
};
