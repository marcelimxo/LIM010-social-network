import  { login, register, getCurrentUser, registerUserGoogle} from '../models/users.js';
// import { registerUserGoogle } from '../models/users.js'; 
import homePage from '../views/home.js';
  const loginController = () =>{
    getCurrentUser().then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }

   const homeController = () => {
    registerUserGoogle().then((data)=>{
      console.log(data.additionalUserInfo.profile.name);
      const user = data.additionalUserInfo.profile.name
      homePage(user);
    }).catch((err)=>{
     console.log(err);

    })
  }


  export { loginController, homeController }