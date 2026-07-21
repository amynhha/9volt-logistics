import "../App.css"

export default function Button({
    children,
    variant = "gold",
    className = "",
    ...props
}) {
    return (
        <button
            className={`btn btn-custom btn-${variant} rounded-4 fw-bold ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}