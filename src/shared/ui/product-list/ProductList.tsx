import { Button } from '../button';
import './ProductList.css';
import { ProductCard } from '../product-card';

const products = [
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
    {
        name: 'Lira Earrings',
        price: 20,
        src: 'product1.jpg',
    },
];

export function ProductList() {
    return (
        <div>
            <div className="product-list-header">
                <h1>Shop The Latest</h1>
                <Button text="View All" className="viewAllButton" />
            </div>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard
                        src={product.src}
                        name={product.name}
                        price={product.price}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
