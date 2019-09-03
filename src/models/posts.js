/* eslint-disable no-console */
const addPost = async (textNewPost, uid, privacity) => {
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

const getPost = (callback) => {
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

const editStatusPost = async (uidPost, privacity) => {
  await firebase.firestore().collection('posts').doc(`${uidPost}`).update({
    public: privacity,
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
export const add = async (textNewPost, uid, privacity) => {
  const get = firebase.firestore().collection('posts')
    .add({
      uid,
      content: textNewPost,
      public: privacity,
      reactionlike: 0,
    });
  return get;
};
