import auth from "firebase-admin"


const serverConfig = "your_server_configs"
  
let app

export default function initFirebase()
{
    if(!app)
    app = auth.initializeApp({
        credential: auth.credential.cert(serverConfig)
    })
}