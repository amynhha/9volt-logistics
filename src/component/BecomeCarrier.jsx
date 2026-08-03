import {
    FaFileDownload,
    FaTruckMoving,
    FaPhoneAlt,
    FaMoneyCheckAlt,
    FaCheckCircle,
    FaArrowRight,
    FaHeadset,
    FaClock,
} from "react-icons/fa";

import Button from "./Button";
import truck from "../assets/aboutUs.png";
import "../App.css";

export default function BecomeCarrier({ id }) {
    return (
        <section id={id} className="carrier-page">

            {/* Hero */}

            <div className="carrier-hero">

                <div className="carrier-left">

                    <span className="carrier-tag">
                        JOIN THE 9VOLT NETWORK
                    </span>

                    <h1>
                        Become a
                        <br />
                        <span>9Volt Carrier</span>
                    </h1>

                    <p>
                        We partner with dependable owner-operators and fleets
                        who value professionalism, communication, and long-term
                        relationships. Join our network and keep your business
                        moving with consistent freight opportunities.
                    </p>

                </div>

                <div className="carrier-right">

                    <img
                        src={truck}
                        alt="9Volt Carrier"
                    />

                </div>

            </div>

            {/* Feature Bar */}

            <div className="carrier-feature-bar">

                <div className="carrier-feature">

                    <FaTruckMoving />

                    <div>

                        <h4>Reliable Freight</h4>

                        <p>Consistent lane opportunities nationwide.</p>

                    </div>

                </div>

                <div className="carrier-feature">

                    <FaHeadset />

                    <div>

                        <h4>24/7 Support</h4>

                        <p>Dedicated dispatch team always available.</p>

                    </div>

                </div>

                <div className="carrier-feature">

                    <FaMoneyCheckAlt />

                    <div>

                        <h4>Quick Payments</h4>

                        <p>Fast payment options available.</p>

                    </div>

                </div>

                <div className="carrier-feature">

                    <FaCheckCircle />

                    <div>

                        <h4>Strong Partnership</h4>

                        <p>We grow when you grow.</p>

                    </div>

                </div>

            </div>

            {/* Cards */}

            <div className="carrier-grid">

                {/* Carrier Packet */}

                <div className="carrier-box">

                    <div className="carrier-box-title">

                        <FaFileDownload />

                        <h3>Carrier Packet</h3>

                    </div>

                    <p>
                        Access our complete carrier packet, onboarding
                        requirements, and operating agreements via our
                        secure third-party portal to get set up quickly.
                    </p>

                    <a href="https://www.ecohomedongthap.com/"
                        className="carrier-download"
                        target="_blank"
                        rel="noopener noreferrer">

                        <div>

                            <h4>Carrier Packet</h4>

                            <span>View Carrier Packet</span>

                        </div>

                        <FaArrowRight />

                    </a>

                </div>

                {/* Timeline */}

                <div className="carrier-box">

                    <div className="carrier-box-title">

                        <FaCheckCircle />

                        <h3>How to Get Started</h3>

                    </div>

                    <ul className="carrier-steps">

                        <li>

                            <span>01</span>

                            Click the onboarding link to open the form.

                        </li>

                        <li>

                            <span>02</span>

                            Complete and submit your setup request.

                        </li>

                        <li>

                            <span>03</span>

                            Receive approval from our team.

                        </li>

                        <li>

                            <span>04</span>

                            Start hauling loads with 9Volt Logistics.

                        </li>

                    </ul>

                </div>

                {/* Quick Pay */}

                <div className="carrier-box">

                    <div className="carrier-box-title">

                        <FaClock />

                        <h3>Quick Pay</h3>

                    </div>

                    <p>

                        Flexible payment options coming soon.

                    </p>

                    <div className="pay-row">

                        <span>Standard Pay</span>

                        <strong>Net 30</strong>

                    </div>

                    <div className="pay-row">

                        <span>Quick Pay</span>

                        <strong>Coming Soon</strong>

                    </div>

                    <div className="pay-row">

                        <span>Same-Day Pay</span>

                        <strong>Coming Soon</strong>

                    </div>

                </div>

                {/* Contact */}

                <div className="carrier-box">

                    <div className="carrier-box-title">

                        <FaPhoneAlt />

                        <h3>Contact Dispatch</h3>

                    </div>

                    <div className="carrier-contact">

                        <p>(817) 495-1675</p>

                        <p>hasan@9voltlogistics.com</p>

                        <p>24/7 Carrier Support</p>

                    </div>

                    <Button variant="gold" link="/contact#getInTouch">

                        Contact Us

                    </Button>

                </div>

            </div>

        </section>
    );
}