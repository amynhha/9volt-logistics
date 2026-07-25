import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./page/Home";
import Services from "./page/Services";
import Shippers from "./page/Shippers";
import Carriers from "./page/Carriers";
import About from "./page/About";
import Contact from "./page/Contact";
import Legal from "./page/Legal";
import ScrollToHash from "./component/ScrollToHash";
import Founder from "./page/Founder";

export default function App() {
    return (
        <>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/shippers" element={<Shippers />} />
                <Route path="/carriers" element={<Carriers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/founder" element={<Founder />} />
            </Routes>
        </>
    );
}