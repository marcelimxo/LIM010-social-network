// Aquí se encuentran todas las funciones relacionadas con el usuario y la base de datos

// Inicia sesión
const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// Registra con Email
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

// Registra con google
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

// Registra con facebook
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

// Obtiene información del usuario
const getUserInfo = async (uid) => {
  try {
    const gettingInfo = await firebase.firestore().collection('users').doc(`${uid}`).get();

    const name = gettingInfo.data().name;
    return { error: false, name };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

// Añade un  nuevo usuario a la base de datos
const addUserToFirestore = async (email, name, authId) => {
  await firebase.firestore().collection('users').doc(`${authId}`).set({
    email, name,
  });
};

// Añade foto a la base de datos
const addUserPhotoToStorage = (photo) => {
  firebase.storage().ref(`avatars/${photo}`);
};

// Se exportan las funciones
export {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo, addUserPhotoToStorage,
};
