import products from '../../../shared/lib/mock/products.json';

interface ProductData {
    [key: string]: {
        id: number;
        name: string;
        price: number;
        src: string;
        status: string;
    }[];
}

export function getProducts(): Promise<ProductData> {
    return new Promise((resolve) => resolve(products));
}
