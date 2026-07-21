import "../App.css";
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
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="custom-navbar">
            <div className="navbar-container">

                {/* Logo */}
                <NavLink to="/home" className="logo">
                    <img 
                        src={logo} 
                        alt="9Volt Logistics" 
                    />
                </NavLink>


                {/* Navigation */}
                <div className="nav-links">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive 
                                ? "nav-item active" 
                                : "nav-item"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>


                {/* Button */}
                <Button variant="gold">
                    Login
                </Button>

            </div>
        </nav>
    );
}