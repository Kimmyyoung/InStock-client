import logo from "./../../assets/Logo/inStock-Logo_2x.png";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            
                <section className="header__logo-container">
                    <img className="header__logo" src={logo} />
                    {/* <img className="header__logo--tablet" src={logoTablet} /> */}
                </section>

                <section className="header__pages">
                    <p className="header__pages-name"> Warehouses </p>
                    <p className="header__pages-name"> Inventories </p>
                </section>
            
        </header>
    )
}

export default Header;