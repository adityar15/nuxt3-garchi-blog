export type GarchiPage = {
    id: string
    title: string
    slug: string
    description: string
    sections: GarchiSection[]
}

export type GarchiSection = {
    id: string;
    name: string;
    props: {
        [key: string]: any;
    };
    children: GarchiSection[];
    order: number;
}

export type GarchiCategory = {
    id: number;
    name: string;
}

export type GarchiAttributeOption = {
    id: number;
    name: string;
    price: number;
}

export type GarchiAttribute = {
    id: number;
    name: string;
    min: string;
    options: GarchiAttributeOption[];
}


export type GarchiSpace = {
    uid: string
    name: string
    logo_url?: string
    number_of_items: number
}

export type GarchiItemMeta = {
    key: string;
    value: string;
    type: string;
}

export type GarchiItem = {
    item_id: number;
    sku: string;
    name: string;
    stock: number;
    categories: GarchiCategory[];
    price: number;
    external_link: string;
    scratched_price: number | null;
    one_liner: string;
    description: string;
    delivery_type: string;
    main_image: string;
    other_images: string[];
    attributes: GarchiAttribute[];
    space: GarchiSpace;
    avg_rating: number | null;
    scheduled_for: string | null;
    item_meta: GarchiItemMeta[];
    created: string;
    updated: string;
}

export type GarchiItemAPIResponse = {
    [x?: string]: any,
    data: GarchiItem[]
}

export type GarchiCategoryAPIResponse = {
    [x?: string]: any,
    data: GarchiCategory[]
}

export type GarchiAsset = {
    id: string;
    path: string;
    size: string;
    type: string;
} 