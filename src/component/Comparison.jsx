import "../App.css";
import comparison from "../assets/comparison.png";
import Button from "../component/Button";
import {
    FiShield,
    FiGlobe,
    FiBox,
    FiMessageCircle,
    FiBriefcase,
    FiUsers,
    FiRadio,
    FiHeart,
} from "react-icons/fi";

export default function Comparison() {
    return (
        <section
            className="comparison-section"
            style={{ backgroundImage: `url(${comparison})` }}
        >
            <div className="comparison-overlay">

                {/* LEFT SIDE */}
                <div className="comparison-side left">
                    <div className="comparison-content">

                        <h1>SHIPPER</h1>
                        <div className="comparison-line"></div>

                        <div className="comparison-list">

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiShield />
                                </div>

                                <p>
                                    Reduce transportation
                                    <br />
                                    stress with dependable
                                    <br />
                                    service.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiGlobe />
                                </div>

                                <p>
                                    Access a reliable
                                    <br />
                                    nationwide carrier
                                    <br />
                                    network.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiBox />
                                </div>

                                <p>
                                    Simplify your freight
                                    <br />
                                    management process.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiMessageCircle />
                                </div>

                                <p>
                                    Receive responsive
                                    <br />
                                    communication and
                                    <br />
                                    dedicated support.
                                </p>
                            </div>

                        </div>

                        <Button variant="gold" link="/shippers">
                            Move Your Freight With Us
                        </Button>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="comparison-side right">
                    <div className="comparison-content">

                        <h1>CARRIER</h1>
                        <div className="comparison-line"></div>

                        <div className="comparison-list">

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiBriefcase />
                                </div>

                                <p>
                                    Access quality freight
                                    <br />
                                    opportunities.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiUsers />
                                </div>

                                <p>
                                    Work with a responsive
                                    <br />
                                    brokerage team.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiRadio />
                                </div>

                                <p>
                                    Experience seamless
                                    <br />
                                    communication and
                                    <br />
                                    coordination.
                                </p>
                            </div>

                            <div className="comparison-item">
                                <div className="comparison-icon">
                                    <FiHeart />
                                </div>

                                <p>
                                    Build a long-term
                                    <br />
                                    partnership with
                                    <br />
                                    9Volt Logistics.
                                </p>
                            </div>

                        </div>

                        <Button variant="navy" link="/carriers">
                            Join Our Carrier Network
                        </Button>

                    </div>
                </div>

            </div>
        </section>
    );
}