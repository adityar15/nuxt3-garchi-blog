import { getAuth, setPersistence, inMemoryPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getIdToken } from "firebase/auth"


function useUser()
{
    const errorBag = useState("errorBag", () => ({
        email: "",
        password: "",
        name: "",
    }))
    
    const user = useState("user", () => null)

    return {
        errorBag,
        user
    }
}


function setTokenOnServer(token)
{
    $fetch("/api/create_session", {
        method: "POST",
        body: {
            token
        }
    }).then(res => {
        signOut(getAuth()).then(res=> {
            // navigate somewhere
            navigateTo("/protected")
        })
    }) 
}

function login({ email, password }) {
    const { user, errorBag } = useUser()
    const auth = getAuth()
    setPersistence(auth, inMemoryPersistence).then(() => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCreds => {
            user.value = userCreds.user
            getIdToken(userCreds.user).then(token => {
                setTokenOnServer(token)
            }).catch(error => {
                console.log("error", error)
            })
        }).catch(error => {
            
            if(error.code === "auth/invalid-credential") {
                errorBag.value.email = "No user with this email"
            }
            else if(error.code === "auth/wrong-password") {
                errorBag.value.email = "Wrong credentials"
            }
        }
    )
    })

}


function signUp({ email, password, name }) {
    const { user, errorBag } = useUser()
    const {addToCollection} = useFireStore()
    const auth = getAuth()
    setPersistence(auth, inMemoryPersistence).then(() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCreds => {
            user.value = userCreds.user
            getIdToken(userCreds.user).then(token => {
                setTokenOnServer(token)
                addToCollection("profiles", userCreds.user.email, {
                    name,
                    uid: userCreds.user.uid,
                    email: userCreds.user.email
                })
            }).catch(error => {
                console.log("error", error)
            })
        }).catch(error => {
            if(error.code === "auth/email-already-in-use") {
                errorBag.value.email = "Email already in use"
            }
            else if(error.code === "auth/weak-password") {
                errorBag.value.password = "Password too weak"
            }
        }
    )
    })

}



async function getUser()
{
    const { user } = useUser()
    const data = await $fetch("/api/user")
    if(data?.statusCode == 401)
       return false
    
    user.value = data
    return data
}


export default function useAuth() {
    const { user, errorBag } = useUser()
    
    return {
        user,
        login,
        signUp,
        errorBag,
        getUser
    }
}