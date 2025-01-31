import './Slider.css';
import { Button } from '../../../shared/button';
import React from 'react';
import { getImage } from '../../../shared/lib/utils/getImage';
import config from '../../../shared/config/config';

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
                    prevIndex === config.sliderImages.length - 1
                        ? 0
                        : prevIndex + 1,
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
                {config.sliderImages.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={getImage(image, 'slider-images')} />
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
                {config.sliderImages.map((_, idx) => (
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
