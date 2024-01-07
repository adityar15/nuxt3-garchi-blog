import GarchiHelper from "~/server/utils/garchi"

export default defineEventHandler(async (event) => {
    const {article_id} = getQuery(event)

    const garchiHelper = new GarchiHelper()

    const comments = await garchiHelper.garchiGetRequest(`reviews/item/${article_id}`)

    return comments
})