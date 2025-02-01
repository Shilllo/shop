import './Footer.css';
import RightArrow from '../../../shared/assets/icons/right-arrow.svg';
export function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div>
                    <p>CONTACT</p>
                    <p>TERMS OF SERVICES</p>
                    <p>SHIPPING AND RETURNS</p>
                </div>

                <div className="search-input">
                    <input required type="text" className="input" />
                    <span className="bar" />
                    <label className="input-label">
                        Give an email, get the newsletter.
                    </label>
                    <button>
                        <img src={RightArrow} />
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                <p className="socials">Socials</p>
            </div>
        </div>
    );
}
