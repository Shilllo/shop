import './Slider.css';
import { Button } from '../../../shared/button';
import React from 'react';

const images = [
    '/image1.jpg',
    '/image1.jpg',
    '/image1.jpg',
    '/image1.jpg',
    '/image1.jpg',
];
const delay = 5000;

export function Slider() {
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
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slider">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((image, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="text">
                            <h1>Gold big hoops</h1>
                            <p>$ 68,00</p>
                            <Button
                                className="viewProductButton"
                                text="View Product"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${
                            index === idx ? ' active' : ''
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
