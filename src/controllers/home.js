import homePage from '../views/home.js';
import { getUserInfo } from '../models/users.js';

export default async () => {
  const { uid } = await firebase.auth().currentUser;
  const { name } = await getUserInfo(uid);
  homePage(name);
};
