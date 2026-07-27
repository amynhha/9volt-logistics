import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <button className="fs-next-btn" onClick={() => navigate(-1)}>
            ← Back
        </button>
    );
}