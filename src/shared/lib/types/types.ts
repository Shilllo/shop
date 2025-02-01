export interface Product {
    id: number;
    name: string;
    price: number;
    src: string;
    status: { type: string; value?: number };
}

export interface ProductData {
    [key: string]: {
        id: number;
        name: string;
        price: number;
        src: string;
        status: { type: string; value?: number };
    }[];
}
