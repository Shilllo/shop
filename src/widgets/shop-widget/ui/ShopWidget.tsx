import { ProductCard } from '../../../entities/product';
import './ShopWidget.css';
import * as React from 'react';
import SearchIcon from '../../../shared/assets/icons/search-icon.svg';
import { getImage } from '../../../shared/lib/utils/getImage';
import { getProducts } from '../../product-list';
import { getProductBadge } from '../../../shared/lib/utils/getProductBadge';
import { Product } from '../../../shared/lib/types/types';

export function ShopWidget() {
    const [values, setValues] = React.useState([0, 180]);

    const handleChange = (newValues: number[]) => setValues(newValues);

    const [onSaleChecked, setOnSaleChecked] = React.useState(false);
    const [inStockChecked, setInStockChecked] = React.useState(false);

    const [products, setProducts] = React.useState<Array<Product>>([]);

    React.useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.products);
        });
    }, []);

    const [currentSorting, setCurrentSorting] = React.useState<string>();

    function filterProducts(data: Product[]) {
        data = data.filter(
            (item) => item.price >= values[0] && item.price <= values[1],
        );
        if (onSaleChecked) {
            return data.filter((item) => item.status.type === 'DISCOUNT');
        } else if (inStockChecked) {
            return data.filter((item) => item.status.type !== 'SOLD_OUT');
        } else {
            return data;
        }
    }

    function sortProducts(data: Product[]) {
        if (currentSorting === 'Ascending') {
            return data.sort((a, b) => a.price - b.price);
        } else if (currentSorting === 'Descending') {
            return data.sort((a, b) => b.price - a.price);
        } else {
            return data;
        }
    }

    return (
        <div className="shop-widget">
            <h1>Shop The Latest</h1>
            <div className="shop-widget-container">
                <div className="filters">
                    <div className="search-input">
                        <input required type="text" className="input" />
                        <label className="input-label">Search</label>
                        <button>
                            <img src={SearchIcon} />
                        </button>
                    </div>
                    <div className="sortByFilter">
                        <select
                            name="sortBy"
                            className="sortBy"
                            required
                            onChange={(e) => setCurrentSorting(e.target.value)}
                        >
                            <option selected disabled />
                            <option value="Ascending">
                                Sort By price: Low to High
                            </option>
                            <option value="Descending">
                                Sort By price: High to Low
                            </option>
                            <option value="Default">Default</option>
                        </select>
                        <label className="label">Sort By</label>
                    </div>

                    <div className="range-slider-container">
                        <div className="rangeslider">
                            <input
                                className="min input-ranges"
                                name="range_1"
                                type="range"
                                min="0"
                                max="180"
                                value={values[0]}
                                onChange={(e) =>
                                    handleChange([+e.target.value, values[1]])
                                }
                            />
                            <input
                                className="max input-ranges"
                                name="range_1"
                                type="range"
                                min="0"
                                max="180"
                                value={values[1]}
                                onChange={(e) =>
                                    handleChange([values[0], +e.target.value])
                                }
                            />
                        </div>
                        <div className="range-labels">
                            <label>
                                {`Price: $${values[0]} - $${values[1]}`}
                            </label>
                            <label>Filter</label>
                        </div>
                    </div>

                    <div className="onSale-toggle">
                        <p>On sale</p>
                        <label className="switcher">
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    setOnSaleChecked(e.target.checked);
                                }}
                                checked={onSaleChecked}
                            />
                            <span className="slider-switch"></span>
                        </label>
                    </div>

                    <div className="inStock-toggle">
                        <p>In Stock</p>
                        <label className="switcher">
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    setInStockChecked(e.target.checked);
                                }}
                                checked={inStockChecked}
                            />
                            <span className="slider-switch"></span>
                        </label>
                    </div>
                </div>
                <div className="shop-widget-products">
                    {products &&
                        sortProducts(filterProducts(products))?.map(
                            (product) => (
                                <ProductCard
                                    src={getImage(
                                        product.src,
                                        'product-images',
                                    )}
                                    name={product.name}
                                    price={product.price}
                                    key={product.id}
                                    badge={getProductBadge(product.status)}
                                />
                            ),
                        )}
                </div>
            </div>
        </div>
    );
}
