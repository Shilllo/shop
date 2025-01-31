import './ProductList.css';
import { ProductCard } from '../../../entities/product';
import { getImage } from '../../../shared/lib/utils/getImage';
import { getProducts } from '../api/getProducts';
import React from 'react';

interface ProductData {
    [key: string]: {
        id: number;
        name: string;
        price: number;
        src: string;
        status: string;
    }[];
}

export function ProductList() {
    const [products, setProducts] = React.useState<ProductData>({});

    React.useEffect(() => {
        getProducts().then((data) => setProducts(data as ProductData));
    }, []);

    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Shop The Latest</h1>
                <a className="viewAllButton" href="/shop">
                    View All
                </a>
            </div>
            <div className="product-list">
                {products &&
                    products?.products?.map((product) => (
                        <ProductCard
                            src={getImage(product.src, 'product-images')}
                            name={product.name}
                            price={product.price}
                            key={product.id}
                            badge={product.status}
                        />
                    ))}
            </div>
        </div>
    );
}
