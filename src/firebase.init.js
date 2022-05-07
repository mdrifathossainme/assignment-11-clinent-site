
import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";;
const firebaseConfig = {
    apiKey: "AIzaSyAJzBNh0sQDTd53fk29Ktvzcqfd2GEqYDQ",
    authDomain: "assignment-warehouse.firebaseapp.com",
    projectId: "assignment-warehouse",
    storageBucket: "assignment-warehouse.appspot.com",
    messagingSenderId: "226604687069",
    appId: "1:226604687069:web:1925094a6140a78e5fc534"
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