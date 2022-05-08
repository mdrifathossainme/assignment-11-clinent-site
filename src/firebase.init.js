
import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";;
const firebaseConfig = {
  
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId

};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;





// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCogAC15IpweNmSKeiAsC-R-f_Ur_k_Dck",
//   authDomain: "assignment-11-1288d.firebaseapp.com",
//   projectId: "assignment-11-1288d",
//   storageBucket: "assignment-11-1288d.appspot.com",
//   messagingSenderId: "853639734825",
//   appId: "1:853639734825:web:29ca08b3bf4cdbe4619e38"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);