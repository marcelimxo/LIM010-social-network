// import MockFirebase from 'mock-cloud-firestore';
// import {
//   addPost, add, getPost,
// } from '../src/models/posts.js';
// // editStatusPost,
// //   editTextPost, deletePost, addLikes,

// const fixtureData = {
//   __collection__: {
//     posts: {
//       __doc__: {
//         a12345678: {
//           uid: 12345678,
//           content: 'testeando',
//           public: true,
//           reactionlike: 0,
//         },
//         b12345678: {
//           uid: 87654321,
//           content: 'prueba 2',
//           public: false,
//           reactionlike: 0,
//         },
       },
     },
   },
 };

 global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
 iniciando test posts

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

 describe('add', () => {
   it('Debería agregar', done => add('nuevo post ttt', '11111112', true)
     .then(() => getPost(
       (data) => {
         const result = data.find(posts => posts.content === 'nuevo post ttt');
         expect(result.content).toBe('nuevo post ttt');
         done();
       },
     )));
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
