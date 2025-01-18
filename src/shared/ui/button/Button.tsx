import './Button.css';
export function Button({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <div className={className}>
            <button>{text}</button>
        </div>
    );
}
