import products from '../../../shared/lib/mock/products.json';
import { ProductData } from '../../../shared/lib/types/types';

export function getProducts(): Promise<ProductData> {
    return new Promise((resolve) => resolve(products));
}
