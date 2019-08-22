// importamos la funcion que vamos a testear
import {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
} from '../src/models/users.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();


beforeEach(() => {
  mockfirestore.autoFlush();
  mockauth.autoFlush();
  global.firebase = firebasemock.MockFirebaseSdk(
    // eslint-disable-next-line no-undef
    path => (path ? mockdatabase.child(path) : null),
    () => mockauth,
    () => mockfirestore,
  );
});


// iniciando tests
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });

  it('debería logguearse con el email "diego@gmail.com" y la contraseña "diego1234"', () => login('diego@gmail.com', 'diego1234').then((user) => {
    expect(user.error).toBe(false);
  }));

  it('debería dar error al intentar loguearse sin email', () => login('', '1234').catch((user) => {
    expect(user.error).toBe(true);
  }));
});

describe('registerWithEmail', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithEmail).toBe('function');
  });


  it('debería registrar un usuario con el correo "ruth@gmail.com" y la contraseña "ruth1234"', () => registerWithEmail('ruth@gmail.com', 'ruth123456789').catch((user) => {
    expect(user.error).toBe(false);
  }));

  it('debería dar error al intentar registrar un usuario sin contraseña', () => registerWithEmail('ruth@gmail.com', '').catch((user) => {
    expect(user.error).toBe(true);
  }));
});

describe('registerUserGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof registerUserGoogle).toBe('function');
  });

  it('debería loggear al usuario con cuenta de google abierta', () => {
    registerUserGoogle().then((user) => {
      expect(user.error).toBe(false);
    });
  });
});

describe('registerUserFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof registerUserFacebook).toBe('function');
  });

  it('debería loggear al usuario con cuenta de facebook abierta', () => {
    registerUserFacebook().then((user) => {
      expect(user.error).toBe(false);
    });
  });

  it('debería darme el uid del usuario loggeado', () => {
    registerUserFacebook().then((user) => {
      expect(user.uid).toBe('y3ZNrQwUh4fWAeiJpcegGnA5Mz12');
    });
  });
});


describe('getUserInfo', () => {
  it('debería ser una función', () => {
    expect(typeof getUserInfo).toBe('function');
  });

  it('debería obtener la información del usuario con el UID: eBALQd2XkAeZDNG8xbkN7qAZXOp1', () => {
    getUserInfo('eBALQd2XkAeZDNG8xbkN7qAZXOp1').then((user) => {
      expect(user.error).toBe(false);
    });
  });

  it('no debería obtener la información de ninún usuario', () => {
    getUserInfo('').catch((user) => {
      expect(user.error).toBe(true);
    });
  });
});

describe('addUserToFirestore', () => {
  it('debería ser una función', () => {
    expect(typeof addUserToFirestore).toBe('function');
  });

  it('debería agregar un usuario con el ID:OyD3aCHLBoTkb66zK0zEZwWJ6MF2, el correo: pepi@gmail.com y el nombre: Pepi a la base de datos', () => {
    addUserToFirestore('pepi@gmail.com', 'Pepi', 'OyD3aCHLBoTkb66zK0zEZwWJ6MF2').then((user) => {
      expect(user.error).toBe(false);
    });
  });

  it('no debería agregar ningún usuario a la base de datos', () => {
    addUserToFirestore().catch((user) => {
      expect(user.error).toBe(true);
    });
  });
});
