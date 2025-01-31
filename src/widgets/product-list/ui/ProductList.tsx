import { Button } from '../../../shared/button';
import './ProductList.css';
import { ProductCard } from '../../../entities/product';
import config from '../../../shared/config/config';
import { getImage } from '../../../shared/lib/utils/getImage';

export function ProductList() {
    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Shop The Latest</h1>
                <a className="viewAllButton" href="/shop">
                    View All
                </a>
            </div>
            <div className="product-list">
                {config.products.map((product, index) => (
                    <ProductCard
                        src={getImage(product.src)}
                        name={product.name}
                        price={product.price}
                        key={index}
                        badge={product.status}
                    />
                ))}
            </div>
        </div>
    );
}
