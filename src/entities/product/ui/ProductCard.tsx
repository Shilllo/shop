import './ProductCard.css';
import ShoppingCart from '../../../shared/assets/icons/shopping-cart.svg';
import Heart from '../../../shared/assets/icons/heart.svg';
import Eye from '../../../shared/assets/icons/eye.svg';
export function ProductCard({
    src,
    name,
    price,
    badge,
}: {
    src: string;
    name: string;
    price: number;
    badge?: string;
}) {
    return (
        <div className="product-card">
            <div
                className="background"
                style={{ backgroundImage: `url(${src}` }}
            >
                {badge && <div id="badge">{badge}</div>}
                <div className="onHover">
                    <img src={ShoppingCart} style={{ width: '40px' }} />
                    <img src={Heart} style={{ width: '40px' }} />
                    <img src={Eye} style={{ width: '40px' }} />
                </div>
            </div>
            <div className="content">
                <p>{name}</p>
                <p>$ {price},00</p>
            </div>
        </div>
    );
}
