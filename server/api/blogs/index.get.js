import GarchiHelper from "~/server/utils/garchi";

export default defineEventHandler(async (event) => {
    const garchiHelper = new GarchiHelper();
    return await garchiHelper.garchiGetRequest("items");
})