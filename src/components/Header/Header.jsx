import logo from "./../../assets/Logo/inStock-Logo_2x.png";
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            
                <section className="header__logo-container">
                    <Link to="/">
                        <img className="header__logo" src={logo} />
                    </Link>
                </section>

                <section className="header__pages">
                    <p className="header__pages-name"> Warehouses </p>
                    <p className="header__pages-name"> Inventories </p>
                </section>
            
        </header>
    )
}

export default Header;