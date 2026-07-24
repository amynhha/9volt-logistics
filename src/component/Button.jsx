import "../App.css";
import { NavLink } from "react-router-dom";

export default function Button({
    children,
    variant = "gold",
    link,
    className = "",
    ...props
}) {
    if (!link) {
        return (
            <button
                className={`btn btn-custom btn-${variant} rounded-4 fw-bold ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }

    return (
        <NavLink
            to={link}
            className={`btn btn-custom btn-${variant} rounded-4 fw-bold ${className}`}
            {...props}
        >
            {children}
        </NavLink>
    );
}