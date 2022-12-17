import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Menu = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };

    return (
        <header>
            <h3 className="logo">
                <NavLink to=".">ТОО Теміртау Қуат</NavLink>
            </h3>
            <nav ref={navRef}>
                <NavLink to="news" onClick={hideNavbar}>
                    Новости
                </NavLink>

                <NavLink to="contacts" onClick={hideNavbar}>
                    Контакты
                </NavLink>

                <NavLink to="about" onClick={hideNavbar}>
                    О нас
                </NavLink>
                <button className="nav_btn nav_close_btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div className="button_div">
                <button className="nav_btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
};
