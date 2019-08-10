
import { loginPage } from '../views/login.js';
import { login, registerUserGoogle } from '../models/users.js';
import errorController from './errors.js';


export default () => {
  const root = document.getElementById('root');
  root.classList.add('container');
  root.innerHTML = loginPage;

  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error, code } = login(email, password);
    if (error) {
      errorController(code);
    }
  });

  const clickGoogle = document.getElementById("google");
  clickGoogle.addEventListener('click',async() =>{
    await registerUserGoogle();
    /* const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    }); */

  });

  /* const clickFb = document.getElementById('fb');
  clickFb.addEventListener('click',() =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    }); 
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
    .then(()=> {
      console.log('usuario Registrado');
    }).catch(()=>{
      console.log(`error de codigo:${error.code}`);
      console.log(`mensaje de error:${error.message}`);

    });
  }); */
  
};
