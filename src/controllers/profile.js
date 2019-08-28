import { addUserPhotoToStorage } from '../models/users.js';

export default () => {
  const avatarUploader = document.getElementById('avatar-uploader');
  avatarUploader.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const storageRef = addUserPhotoToStorage(file.name);
    const task = storageRef.put(file);
  });
};
