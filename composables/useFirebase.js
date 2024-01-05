

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKC0ZBhAsu65Z0zmKFRBSWQNIsH-Y_tT0",
  authDomain: "nuxt3app-e98c3.firebaseapp.com",
  projectId: "nuxt3app-e98c3",
  storageBucket: "nuxt3app-e98c3.appspot.com",
  messagingSenderId: "169524661635",
  appId: "1:169524661635:web:a1ad8627686f5951e03ab6"
};

let app

export default function useFirebase() {
    if(!app)
    app = initializeApp(firebaseConfig);
}