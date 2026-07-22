import "../App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function NavBar() {
    const navItems = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "Shippers", path: "/shippers" },
        { name: "Carriers", path: "/carriers" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    const [hovered, setHovered] = useState(null);

    return (
        <nav className="navbar navbar-expand-lg nav-color">
            <div className="container-fluid">

                <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src={logo} alt="Company Logo" height="80" />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                >
                    <div className="flex-grow-1 d-flex justify-content-center">
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            {navItems.map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <NavLink
                                        onMouseEnter={() => setHovered(item.path)}
                                        onMouseLeave={() => setHovered(null)}
                                        className={({ isActive }) =>
                                            `nav-link ${hovered === item.path ||
                                                (hovered === null && isActive)
                                                ? "nav-highlight"
                                                : "nav-item-color"
                                            }`
                                        }
                                        to={item.path}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}

                            <li className="nav-item login-mobile">
                                <Button variant="gold">
                                    Login
                                </Button>
                            </li>

                        </ul>

                    </div>
                    <div className="d-none d-lg-flex ms-3">
                        <Button variant="gold">
                            Login
                        </Button>
                    </div>
                </div>

            </div>
        </nav>
    );
}
