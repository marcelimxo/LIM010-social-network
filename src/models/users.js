const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { error: false };
  } catch (error) {
    return { error: true };
  }
};

const registerWithEmail = async (email, password) => {
  try {
    const { user: { uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return {
      error: false, email, uid,
    };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

const registerUserGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const popup = await firebase.auth().signInWithPopup(provider);

    return {
      error: false,
      uid: popup.user.uid,
      email: popup.additionalUserInfo.profile.email,
      name: popup.additionalUserInfo.profile.name,
    };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

const registerUserFacebook = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const popup = await firebase.auth().signInWithPopup(provider);

    return {
      error: false,
      uid: popup.user.uid,
      email: popup.additionalUserInfo.profile.email,
      name: popup.additionalUserInfo.profile.name,
    };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

const getUserInfo = async (uid) => {
  try {
    const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();

    const name = gettingInfo.data().name;
    return { error: false, name };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

const addUserToFirestore = async (email, name, authId) => {
  await firebase.firestore().collection('users').doc(`${authId}`).set({
    email, name,
  });
};


export {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
};
