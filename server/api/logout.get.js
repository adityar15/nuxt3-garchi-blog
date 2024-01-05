

export default defineEventHandler(async(event) =>{
   deleteCookie(event, "authcookie")
   return {
         statusCode: 200,
         message: "User logged out"
   }
})