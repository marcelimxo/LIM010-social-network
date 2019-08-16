// Este es el punto de entrada de tu aplicacion
import router from './routes/index.js';


const firebaseConfig = {
  apiKey: 'AIzaSyDvjpKbVQV9VFhj2kROad-0ZE_2BlNuA78',
  authDomain: 'poetik-1d0bc.firebaseapp.com',
  databaseURL: 'https://poetik-1d0bc.firebaseio.com',
  projectId: 'poetik-1d0bc',
  storageBucket: 'poetik-1d0bc.appspot.com',
  messagingSenderId: '85143804945',
  appId: '1:85143804945:web:c774288a12be0a1f',
};

firebase.initializeApp(firebaseConfig);

router();
