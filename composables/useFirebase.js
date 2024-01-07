

import { initializeApp } from "firebase/app";

const firebaseConfig = "your_firebase_configs"

let app

export default function useFirebase() {
    if(!app)
    app = initializeApp(firebaseConfig);
}