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

const getPost = async () => {
  const allPosts = [];
  await firebase.firestore().collection('posts').get().then(
    (onSnapshot) => {
      onSnapshot.forEach(
        (doc) => {
          allPosts.push({ id: doc.id, ...doc.data() });
        },
      );
    },
  );
  return allPosts;
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
  firebase.firestore().collection('posts').doc(`${uidPost}`).delete();
  console.log('eliminado');
};


export {
  getPost, editStatusPost, addPost, editTextPost, deletePost,
};
