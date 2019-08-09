import { getCurrentUser } from '../models/users.js';
import homePage from '../views/home.js';

export default async () => {
  const { user: { name } } = await getCurrentUser();

  homePage(name);
};
