import garchiHelper from "../utils/garchi"

export default defineEventHandler(async( event )=> {
    const {slug} = await readBody(event)
    const page = await garchiHelper.getGarchiPage("your_space_uid", "draft", "/")
    return page
})