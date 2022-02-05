
import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

{
    apiKey: "AIzaSyA5hly6vvy73sl3oI2lzjRxAPSpp53beXw",
    authDomain: "tiendacoder-f7507.firebaseapp.com",
    projectId: "tiendacoder-f7507",
    storageBucket: "tiendacoder-f7507.appspot.com",
    messagingSenderId: "1003180323511",
    appId: "1:1003180323511:web:0cae4cd0f497a79d525332"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}


