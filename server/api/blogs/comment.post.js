import { getDocument } from "~/server/utils/firebasehelpers"
import GarchiHelper from "~/server/utils/garchi"

export default defineEventHandler(async (event) => {
    const {article_id, email, review} = await readBody(event)

    const sessionCookie = getCookie(event, "authcookie")

    if(!sessionCookie)
    throw createError({statusCode: 401, message: "Unauthorized"})


    const profile = await getDocument("profiles", email)

    const garchiHelper = new GarchiHelper()

    const comment = await garchiHelper.garchiPostRequest(`reviews/item`, {
        rating: 5,
        review_body: review,
        user_email: email,
        user_name: profile?.name,
        item_id: article_id
    })

    return comment
})