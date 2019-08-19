const addPost = async (textNewPost, uid) => {
  const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();
  firebase.firestore().collection('users').doc(`${uid}`).collection('posts')
    .add({
      content: textNewPost,
      UID: uid,
      name: gettingInfo.data().name,
      reaction: 0,
      reactionsad: 0,
      reactionlike: 0,
      reactionlove: 0,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

export { addPost };
