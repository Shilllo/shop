import './Footer.css';
export function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div>
                    <p>CONTACT</p>
                    <p>TERMS OF SERVICES</p>
                    <p>SHIPPING AND RETURNS</p>
                </div>

                <input
                    className="email-input"
                    placeholder="Give an email, get the newsletter."
                />
            </div>

            <div className="footer-bottom">
                <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                <p className="socials">Socials</p>
            </div>
        </div>
    );
}
