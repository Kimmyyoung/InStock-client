import logo from "./../../assets/Logo/inStock-Logo_2x.png";
import './Header.scss';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const [activePage, setActivePage] = useState(null);
    const location = useLocation();

    const handlePageClick = (pageName) => {
        setActivePage(pageName);
    };

    return (
        <header className="header">
            
                <section className="header__logo-container">
                    <Link to="/">
                        <img className="header__logo" src={logo} />
                    </Link>
                </section>

                <section className="header__pages">
                    <Link
                        to="/"
                        onClick={() => handlePageClick('Warehouses')}
                        className={`header__pages-name ${activePage === 'Warehouses' ? 'header__pages-name--active' : ''}`}
                    >
                        Warehouses
                    </Link>
                    <Link
                        to="/inventory"
                        onClick={() => handlePageClick('Inventories')}
                        className={`header__pages-name ${activePage === 'Inventories' ? 'header__pages-name--active' : ''}`}
                    >
                        Inventories
                    </Link>
                </section>
            
        </header>
    )
}

export default Header;