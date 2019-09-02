import MockFirebase from 'mock-cloud-firestore';
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


const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        a12345678: {
          uid: 12345678,
          content: 'testeando',
          public: true,
          reactionlike: 0,
        },
        b12345678: {
          uid: 87654321,
          content: 'prueba 2',
          public: false,
          reactionlike: 0,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
// iniciando test posts

describe('addPost', () => {
  it('Debería agregar', done => addPost('nuevo post', '11111111', true)
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.content === 'nuevo post');
        expect(result.content).toBe('nuevo post');
        done();
      },
    )));
});

describe('editStatusPost', () => {
  it('debería ser una función', () => {
    expect(typeof editStatusPost).toBe('function');
  });
  it('debería cambir estado del post', () => {
    editStatusPost('b12345678', true).catch((postStatus) => {
      expect(postStatus).toBe(true);
    });
  });
});

describe('editTextPost', () => {
  it('debería ser una función', () => {
    expect(typeof editTextPost).toBe('function');
  });
  it('postTextContent debería ser "texto nuevo"', () => {
    editTextPost('b12345678', 'texto nuevo').catch((postTextContent) => {
      expect(postTextContent).toBe('texto nuevo');
    });
  });
});

describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });

  it('Debería poder eliminar una nota', done => deletePost('a12345678')
    .then(() => getPost(
      (data) => {
        const result = data.find(post => post.id === 'a12345678');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

describe('addLikes', () => {
  it('debería ser una función', () => {
    expect(typeof addLikes).toBe('function');
  });

  it('addLikes debería añadir  like', () => {
    addLikes('b12345678').catch((likeCount) => {
      expect(likeCount).toBe(1);
    });
  });
});
