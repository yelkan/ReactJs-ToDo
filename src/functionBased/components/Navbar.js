import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { MdLogout } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import ThemeSwitcher from "./ThemeSwitcher";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { user, functions } = useContext(AuthContext);
    const [navbarOpen, setNavbarOpen] = useState(false)

    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        }
    ]

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
            <nav className="navbar">
                <button onClick={handleToggle}>
                    <FiMenu style={{ width: "40px", height: "40px" }} />
                </button>
                <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <button onClick={handleToggle}>
                        <MdClose style={{  width: "40px", height: "40px" }} />
                    </button>


                    <ul>
                        {links.map(link => {
                            return <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    activeClassName="active-link"
                                    onClick={() => closeMenu()}
                                    exact >
                                    {link.text}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>

            <div className="topBar">
                <ul>
                    <li><ThemeSwitcher /></li>
                    <li>
                        {user.username}
                    </li>
                    <li>
                        <button onClick={functions.logout} >
                            <MdLogout style={{ width: "40px", height: "40px" }} />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;