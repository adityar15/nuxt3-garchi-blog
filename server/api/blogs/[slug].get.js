import GarchiHelper from "~/server/utils/garchi";

export default defineEventHandler(async (event) => {

    const slug = getRouterParam(event, 'slug')
    const garchiHelper = new GarchiHelper();
    return await garchiHelper.garchiGetRequest(`item/${slug}?reactions=include`)
})