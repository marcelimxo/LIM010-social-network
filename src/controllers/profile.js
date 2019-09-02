/* eslint-disable no-console */
import { addUserPhotoToStorage } from '../models/users.js';
import { profilePageView } from '../views/profile.js';

export default async () => {
  const user = await firebase.auth().currentUser;
  console.log(user);

  await profilePageView(user);
  const avatarUploader = document.getElementById('submitnn');
  console.log(avatarUploader);
  avatarUploader.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const storageRef = await addUserPhotoToStorage(file.name);
    const task = storageRef.put(file);
    console.log(task);
  });
};
