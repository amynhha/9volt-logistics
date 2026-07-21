import "../App.css";
import { NavLink } from "react-router-dom";

export default function Button({
  children,
  variant = "gold",
  link = "/",
  className = "",
  ...props
}) {
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