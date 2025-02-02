import './Header.css';
import searchIcon from '../../../shared/assets/icons/search-icon.svg';
import shoppingCartIcon from '../../../shared/assets/icons/shopping-cart.svg';
import profileIcon from '../../../shared/assets/icons/profile.svg';

export function Header() {
    return (
        <div className="header">
            <h1>
                <a href="/">SHOPPE</a>
            </h1>
            <div className="header-right">
                <a href="/shop">Shop</a>
                <a>Blog</a>
                <a>Our Story</a>
                <div id="divider">|</div>
                <div className="icon">
                    <img src={searchIcon} />
                </div>
                <div className="icon">
                    <img src={shoppingCartIcon} />
                </div>
                <div className="icon">
                    <img src={profileIcon} />
                </div>
            </div>
        </div>
    );
}
