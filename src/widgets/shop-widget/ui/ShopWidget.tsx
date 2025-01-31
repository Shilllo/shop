import { ProductCard } from '../../../entities/product';
import config from '../../../shared/config/config';
import './ShopWidget.css';
import * as React from 'react';
import SearchIcon from '../../../shared/assets/icons/search-icon.svg';
import { getImage } from '../../../shared/lib/utils/getImage';

export function ShopWidget() {
    const [values, setValues] = React.useState([40, 180]);

    const handleChange = (newValues: number[]) => setValues(newValues);

    const [onSaleChecked, setOnSaleChecked] = React.useState(false);
    const [inStockChecked, setInStockChecked] = React.useState(false);

    return (
        <div className="shop-widget">
            <h1>Shop The Latest</h1>
            <div className="shop-widget-container">
                <div className="filters">
                    <div className="search-input">
                        <input placeholder="Search..." />
                        <button>
                            <img src={SearchIcon} />
                        </button>
                    </div>
                    <div className="shopByFilter">
                        <select name="shopBy" className="shopBy" required>
                            <option selected value=""></option>
                            <option value="value1">Значение1</option>
                            <option value="value2">Значение2</option>
                            <option value="value3">Значение3</option>
                        </select>
                        <label className="label">Shop By</label>
                    </div>
                    <div className="sortByFilter">
                        <select name="sortBy" className="sortBy" required>
                            <option selected value=""></option>
                            <option value="value1">
                                Sort By price: Low to High
                            </option>
                            <option value="value2">
                                Sort By: Ascending order
                            </option>
                            <option value="value3">Sort By: A-Z</option>
                        </select>
                        <label className="label">Sort By</label>
                    </div>

                    <div className="range-slider-container">
                        <label className="range-label-1">
                            Price: $40 - $180
                        </label>
                        <label className="range-label-2">Filter</label>
                        <div className="rangeslider">
                            <input
                                className="min input-ranges"
                                name="range_1"
                                type="range"
                                min="40"
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
                                min="40"
                                max="180"
                                value={values[1]}
                                onChange={(e) =>
                                    handleChange([values[0], +e.target.value])
                                }
                            />
                        </div>
                    </div>

                    <div className="onSale-toggle">
                        <p>On sale</p>
                        <label className="switcher">
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    setOnSaleChecked(e.target.checked);
                                    console.log(onSaleChecked);
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
                                    console.log(inStockChecked);
                                }}
                                checked={inStockChecked}
                            />
                            <span className="slider-switch"></span>
                        </label>
                    </div>
                </div>
                <div className="shop-widget-products">
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
        </div>
    );
}
