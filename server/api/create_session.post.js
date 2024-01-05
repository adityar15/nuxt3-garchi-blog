import { createSessionCookie } from "../utils/firebasehelpers"

export default defineEventHandler(async(event) => {
  const {token} = await readBody(event)
  const sessionCookie = await createSessionCookie(token)
  setCookie(event, 'authcookie', sessionCookie, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), 
  })  
  return {
    statusCode: 200,
    message: "Session cookie set"
  }
})