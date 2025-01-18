import './ProductCard.css';

export function ProductCard({
    src,
    name,
    price,
}: {
    src: string;
    name: string;
    price: number;
}) {
    return (
        <div className="product-card">
            <div style={{ backgroundImage: `url(${src}` }} />
            <div className="content">
                <p>{name}</p>
                <p>$ {price},00</p>
            </div>
        </div>
    );
}
