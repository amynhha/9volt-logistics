import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import Shippers from "./page/Shippers";
import Carriers from "./page/Carriers";
import About from "./page/About";
import Contact from "./page/Contact";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shippers" element={<Shippers />} />
            <Route path="/carriers" element={<Carriers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}