const addPost = async (textNewPost, uid, privacity) => {
  const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();
  firebase.firestore().collection('posts')
    .add({
      uid,
      date: new Date(),
      content: textNewPost,
      nameUser: gettingInfo.data().name,
      public: privacity,
      reactionlike: 0,
    });
};

const getPost = (callback) => {
  firebase.firestore().collection('posts').where('public', '==', 'true').orderBy('date', 'asc')
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ data: doc.data(), idpost: doc.id });
      });
      callback(arr);
    });
};

const editStatusPost = async (uidPost, status) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).update({
    public: status,
  });
};

const editTextPost = async (uid, text) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).update({
    content: text,
  });

  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const postTextContent = gettingInfo.data().content;

  return postTextContent;
};

const deletePost = async (uid) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).delete();
};

const addLikes = async (uid) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).update({
    reactionlike: firebase.firestore.FieldValue.increment(1),
  });

  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const likeCount = gettingInfo.data().reactionlike;

  return likeCount;
};


export {
  getPost, editStatusPost, addPost, editTextPost, deletePost, addLikes,
};
