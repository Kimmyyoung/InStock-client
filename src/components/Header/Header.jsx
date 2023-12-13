import logo from "./../../assets/Logo/inStock-Logo_1x.png";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <section className="header__logo-container">
                <img className="header__logo" src={logo}></img>
            </section>

            <section className="header__pages">
                <p className="header__pages-warehouse"> warehouses </p>
                <p className="header__pages-inventory"> inventories </p>
            </section>
        </header>
    )
}

export default Header;