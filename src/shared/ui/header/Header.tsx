import './Header.css';

export function Header() {
    return (
        <div className="header">
            <h1>
                <a href="/">SHOPPE</a>
            </h1>
            <div className="header-right">
                <a href="/shop">Shop</a>
                <p>Blog</p>
                <p>Our Story</p>
                <div id="divider">|</div>
                <div className="icon">
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 15L21 21"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="#323232"
                            stroke-width="2"
                        />
                    </svg>
                </div>
                <div className="icon">
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6V6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 3H3.5V3C4.1642 3 4.72218 3.49942 4.79553 4.15955L5.55558 11"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18C8.32843 18 9 18.6716 9 19.5Z"
                            stroke="#323232"
                            stroke-width="2"
                        />
                        <path
                            d="M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z"
                            stroke="#323232"
                            stroke-width="2"
                        />
                    </svg>
                </div>
                <div className="icon">
                    <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 48 48"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title />
                        <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" />
                        <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
