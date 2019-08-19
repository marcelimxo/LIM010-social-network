
const addUserToFirestore = async (email, name, authId) => {
  await firebase.firestore().collection('users').doc(`${authId}`).set({
    email, name,
  });

  // console.log('Document written with ID: ', authId);
};

const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    return { error: false };
  } catch (error) {
    return { error: true, code: error.code };
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

    const email = await popup.additionalUserInfo.profile.email;
    const name = await popup.additionalUserInfo.profile.name;

    const { user: { uid } } = await popup;

    return {
      error: false, uid, email, name,
    };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

const registerUserFacebook = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const popup = await firebase.auth().signInWithPopup(provider);

    const email = await popup.additionalUserInfo.profile.email;
    const name = await popup.additionalUserInfo.profile.name;

    const { user: { uid } } = await popup;

    return {
      error: false, uid, email, name,
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


export {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
};
