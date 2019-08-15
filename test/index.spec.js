// importamos la funcion que vamos a testear
import {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
} from '../src/models/users.js';

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
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
