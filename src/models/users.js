import { redirect } from '../utils.js';

export const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        redirect('home');
      } else {
        // No user is signed in.
      }
    });
    return { error: false };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

export const register = async (name, email, password) => {
  try {
    const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.database().ref(`users/${createUser.user.uid}`).set({ name, email });
    return { error: false };
  } catch (error) {
    return { error: true, code: error.code };
  }
};

export const getCurrentUser = async () => {
  try {
    const userId = await firebase.auth().currentUser.uid;
    const user = await firebase.database().ref(`/users/${userId}`).once('value');

    return { error: false, user: user.val() };
  } catch (error) {
    return { error: true, code: error.code };
  }
};
