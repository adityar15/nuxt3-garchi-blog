import { getUser } from "../utils/firebasehelpers"

export default defineEventHandler(async(event) =>{
    try{
        const sessioCookie = getCookie(event, "authcookie")
        const user = await getUser(sessioCookie)
        return user
    }catch(err)
    {
        return {
            statusCode: 401,
            message: "User not logged in"
        }
    }
})