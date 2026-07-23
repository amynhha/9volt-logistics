import { NavLink } from "react-router-dom";
import {
    FiChevronRight,
    FiPhone,
    FiMail,
    FiMapPin,
} from "react-icons/fi";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Paginator() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo */}
                <div className="footer-brand">

                    <img src={logo} alt="9Volt Logistics" />

                    <p>
                        Powering dependable freight solutions with reliable
                        carrier partnerships, responsive communication,
                        and nationwide coverage.
                    </p>

                </div>

                {/* Contact */}
                <div className="footer-contact">

                    <div>
                        <FiPhone />
                        <span>(817) 495-1675</span>
                    </div>

                    <div>
                        <FiMail />
                        <span>hasan@9voltlogistics.com</span>
                    </div>

                    <div>
                        <FiMapPin />
                        <span>Nebraska, USA</span>
                    </div>

                    <div className="footer-social">

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=61592158836378">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                    </div>

                </div>

                {/* Company */}
                <div className="footer-column">

                    <h5>COMPANY</h5>

                    <ul>

                        <li><NavLink to="/"><FiChevronRight />Home</NavLink></li>

                        <li><NavLink to="/services"><FiChevronRight />Services</NavLink></li>

                        <li><NavLink to="/shippers"><FiChevronRight />Shippers</NavLink></li>

                        <li><NavLink to="/carriers"><FiChevronRight />Carriers</NavLink></li>

                        <li><NavLink to="/about"><FiChevronRight />About Us</NavLink></li>

                        <li><NavLink to="/contact"><FiChevronRight />Contact</NavLink></li>

                    </ul>

                </div>

                {/* Solutions */}
                <div className="footer-column">

                    <h5>SOLUTIONS</h5>

                    <ul>

                        <li><NavLink to="/contact"><FiChevronRight />Request a Quote</NavLink></li>

                        <li><NavLink to="/carriers"><FiChevronRight />Become a Carrier</NavLink></li>

                    </ul>

                </div>

                {/* Legal */}
                <div className="footer-column">

                    <h5>LEGAL</h5>

                    <ul>

                        <li><NavLink to="/legal"><FiChevronRight />Privacy Policy</NavLink></li>

                        <li><NavLink to="/legal"><FiChevronRight />Terms & Conditions</NavLink></li>

                        <li><NavLink to="/legal"><FiChevronRight />Claims Policy</NavLink></li>

                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                MC #XXXXXXX &nbsp; | &nbsp;
                © 2026 9Volt Logistics LLC. All Rights Reserved.

            </div>

        </footer>
    );
}