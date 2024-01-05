import {getFirestore, setDoc, doc, getDoc} from "firebase/firestore"

let db 

async function addToCollection(collection, docId, data)
{
    const docRef = doc(db, collection, docId)
    return await setDoc(docRef, data)
}

async function getDocFromCollection(collection, docId)
{
    const docRef = doc(db, collection, docId)
    return await getDoc(docRef)
}

export default function useFireStore()
{
    db = getFirestore()
    return {
        addToCollection,
        getDocFromCollection
    }

}