import GarchiHelper from "~/server/utils/garchi"

export default defineEventHandler(async (event) => {
    const {email, reaction, item_id, reaction_for} = await readBody(event)

    const sessionCookie = getCookie(event, "authcookie")

    if(!sessionCookie)
    throw createError({statusCode: 401, message: "Unauthorized"})



    const garchiHelper = new GarchiHelper()

    const reactionResponse = await garchiHelper.garchiPostRequest('manage-reaction', {
        user_identifier: email,
        reaction,
        item_id,
        reaction_for
    })

    return reactionResponse
})