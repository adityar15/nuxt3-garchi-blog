export default function useItemMeta(item_meta) {
    const metaDetails = computed(() =>
        item_meta.reduce((obj, meta) => {
            obj[meta.key] = meta.value;
            return obj;
        }, {})
    );
    return {
        metaDetails
    }
}