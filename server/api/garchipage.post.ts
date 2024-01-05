import Garchi from "../utils/garchi"

export default defineEventHandler(async( event )=> {
    const garchiHelper = new Garchi()
    const {slug} = await readBody(event)
    const page = await garchiHelper.getGarchiPage("your_space_uid", "draft", slug)
    return page
})