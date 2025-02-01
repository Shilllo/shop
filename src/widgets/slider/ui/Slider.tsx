import './Slider.css';
import { Button } from '../../../shared/button';
import React from 'react';
import { getImage } from '../../../shared/lib/utils/getImage';
import { getProducts } from '../../product-list';

const delay = 5000;

interface sliderProduct {
    id: number;
    name: string;
    price: number;
    src: string;
}

export function Slider() {
    const [sliderProducts, setSliderProducts] = React.useState<
        Array<sliderProduct>
    >([]);

    React.useEffect(() => {
        getProducts().then((data) => setSliderProducts(data.sliderProducts));
    }, []);

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<number | null>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === sliderProducts.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );
        return () => {
            resetTimeout();
        };
    }, [index, sliderProducts.length]);

    return (
        <div className="slider">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {sliderProducts.map((product) => (
                    <div className="slide" key={product.id}>
                        <img src={getImage(product.src, 'slider-images')} />
                        <div className="text">
                            <h1>{product.name}</h1>
                            <p>$ {product.price},00</p>
                            <Button
                                className="viewProductButton"
                                text="View Product"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {sliderProducts.map((product) => (
                    <div
                        key={product.id}
                        className={`slideshowDot${
                            index === product.id ? ' active' : ''
                        }`}
                        onClick={() => {
                            setIndex(product.id);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
