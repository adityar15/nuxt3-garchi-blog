import initFirebase from "./firebaseserver"
import {getAuth} from "firebase-admin/auth"
import {getFirestore} from "firebase-admin/firestore"


export async function createSessionCookie(token){
    initFirebase()
    const expiresIn = 60 * 60 * 24 * 5 * 1000
    const sessionCookie  = await getAuth().createSessionCookie(token, {expiresIn})
    return sessionCookie
}


export async function getUser(sessionCookie)
{
    initFirebase()
    const user = await getAuth().verifySessionCookie(sessionCookie, true)
    return user
}

export async function getDocument(collection, documentID){
    initFirebase()
    const doc = await getFirestore().collection(collection).doc(documentID).get()
    return doc.data()
}