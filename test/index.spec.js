// importamos la funcion que vamos a testear
import {
  login, registerWithEmail, registerUserGoogle,
  registerUserFacebook, addUserToFirestore, getUserInfo,
} from '../src/models/users.js';

import {
  addPost, getPost, editStatusPost,
  editTextPost, deletePost, addLikes,
} from '../src/models/posts.js';

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


// iniciando tests login
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });

  it('Debería poder iniciar sesion', () => login('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});

describe('registerWithEmail', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithEmail).toBe('function');
  });

  it('deberia retornar un objeto', () => {
    expect(typeof registerWithEmail()).toBe('object');
  });

  it('deberia resolver un objeto cuando sea exito', () => {
    registerWithEmail()
      .then((obj) => {
        expect(typeof obj).toBe('object');
      });
  });

  it('debería registrar un usuario con el correo "ruth@gmail.com" y la contraseña "ruth1234"', done => registerWithEmail('ruth@gmail.com', 'ruth123456789').catch((user) => {
    expect(user.error).toBe(false);
    done();
  }));

  it('debería dar error al intentar registrar un usuario sin contraseña', () => registerWithEmail('ruth@gmail.com', '').catch((user) => {
    expect(user.error).toBe(true);
  }));
});

describe('registerUserGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof registerUserGoogle).toBe('function');
  });

  it('deberia retornar un objeto', () => {
    expect(typeof registerUserGoogle()).toBe('object');
  });

  it('deberia resolver un objeto cuando sea exito', () => {
    registerUserGoogle()
      .then((obj) => {
        expect(typeof obj).toBe('object');
      });
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

  it('deberia retornar un objeto', () => {
    expect(typeof registerUserFacebook()).toBe('object');
  });

  it('deberia resolver un objeto cuando sea exito', () => {
    registerUserFacebook()
      .then((obj) => {
        expect(typeof obj).toBe('object');
      });
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

  it('deberia retornar un objeto', () => {
    expect(typeof getUserInfo()).toBe('object');
  });

  it('deberia resolver un objeto cuando sea exito', () => {
    getUserInfo()
      .then((obj) => {
        expect(typeof obj).toBe('object');
      });
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

  it('deberia retornar un objeto', () => {
    expect(typeof addUserToFirestore()).toBe('object');
  });

  it('deberia resolver un objeto cuando sea exito', () => {
    addUserToFirestore()
      .then((obj) => {
        expect(typeof obj).toBe('object');
      });
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

// iniciando test posts

describe('addPost', () => {
  it('debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });
  it('deberia retornar un objeto', () => {
    expect(typeof addPost('prueba de test', '1218gg7X5FMHpX1jenc1oo8fKtw2', false)).toBe('object');
  });
});

describe('getPost', () => {
  it('debería ser una función', () => {
    expect(typeof getPost).toBe('function');
  });
});

describe('editStatusPost', () => {
  it('debería ser una función', () => {
    expect(typeof editStatusPost).toBe('function');
  });
});

describe('editTextPost', () => {
  it('debería ser una función', () => {
    expect(typeof editTextPost).toBe('function');
  });
  it('debería retornar un string', () => {
    expect(typeof editTextPost('1UhG454Qww7Jls7H6FZm', 'texto nuevo')).toBe('object');
  });
  it('no debería cambiar el texto de ningun post', () => {
    editTextPost('texto nuevo').catch((user) => {
      expect(user.error).toBe(true);
    });
  });
  it('postTextContent debería ser "texto nuevo"', () => {
    editTextPost('1UhG454Qww7Jls7H6FZm', 'texto nuevo').catch((postTextContent) => {
      expect(postTextContent).toBe('texto nuevo');
    });
  });
});

describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });

  it('no debería eliminar ningún post de la base de datos', () => {
    deletePost().catch((user) => {
      expect(user.error).toBe(true);
    });
  });
});

describe('addLikes', () => {
  it('debería ser una función', () => {
    expect(typeof addLikes).toBe('function');
  });

  it('debería retornar un objeto', () => {
    expect(typeof addLikes('1MRrenMTpBLuUSfnHPvY')).toBe('object');
  });

  it('no debería añadir likes ningún post de la base de datos', () => {
    addLikes().catch((user) => {
      expect(user.error).toBe(true);
    });
  });
});
