import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton({ className = ""}) {
    const navigate = useNavigate();

    return (
        <button className={`fs-next-btn ${className}`} onClick={() => navigate(-1)}>
            ← Back
        </button>
    );
}