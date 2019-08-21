// importamos la funcion que vamos a testear
import {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
} from '../src/models/users.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  // eslint-disable-next-line no-undef
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  // () => mockfirestore,
);

// iniciando tests
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });


  it('debería logguearse con el email "diego@gmail.com" y la contraseña "diego1234"', () => login('diego@gmail.com', 'diego1234').then((user) => {
    expect(user.email).toEqual('diego@gmail.com');
  }));
});

describe('registerWithEmail', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithEmail).toBe('function');
  });
});

describe('registerUserGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof registerUserGoogle).toBe('function');
  });
});

describe('registerUserFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof registerUserFacebook).toBe('function');
  });
});

describe('addUserToFirestore', () => {
  it('debería ser una función', () => {
    expect(typeof addUserToFirestore).toBe('function');
  });
});

describe('getUserInfo', () => {
  it('debería ser una función', () => {
    expect(typeof getUserInfo).toBe('function');
  });
});
