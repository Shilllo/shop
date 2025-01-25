import './ProductCard.css';

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
            <div style={{ backgroundImage: `url(${src}` }}>
                <div id="badge">{badge}</div>
            </div>
            <div className="content">
                <p>{name}</p>
                <p>$ {price},00</p>
            </div>
        </div>
    );
}
