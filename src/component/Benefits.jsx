import {
    FaTruckMoving,
    FaMoneyCheckAlt,
    FaHeadset,
    FaClipboardCheck,
    FaChartLine,
} from "react-icons/fa";

import { carrierBenefits, carrierCTA, carrierStats } from "../utils/carrierBenefits";
import Button from "./Button";
import truck from "../assets/benefits.png";
import "../App.css";

export default function CarrierBenefits({ id }) {
    return (
        <section id={id} className="carrier-section">

            <div className="carrier-header">

                <span className="section-tag">
                    FOR CARRIERS
                </span>

                <h2>
                    Built for Carriers
                    <br />
                    <span>Who Want to Keep Moving.</span>
                </h2>

                <p>
                    At 9Volt Logistics, we know your time on the road is money.
                    We partner with dependable owner-operators and fleets to
                    deliver consistent freight, responsive communication,
                    and hassle-free operations.
                </p>

            </div>

            <div className="carrier-content">

                {/* LEFT */}

                <div className="carrier-image">

                    <div className="carrier-glow"></div>

                    <img
                        src={truck}
                        alt="9Volt Logistics Truck"
                    />

                </div>

                {/* RIGHT */}

                <div className="carrier-cards">

                    {carrierBenefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className="carrier-card" key={item.id}>
                                <div className="carrier-icon">
                                    <Icon />
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

            {/* CTA */}

            <div className="carrier-cta">

                <div className="carrier-cta-text">

                    <span>
                        READY TO HAUL WITH US?
                    </span>

                    <h3>
                        Join the 9Volt Carrier Network.
                    </h3>

                    <p>
                        Gain access to consistent freight,
                        fast payments, and a brokerage that
                        values long-term partnerships.
                    </p>

                </div>

                <div className="carrier-buttons">

                    <Button variant="gold" link="/services">
                        See Our Services
                    </Button>

                    <Button variant="navy" link="/contact#getInTouch">
                        Contact Us
                    </Button>

                </div>

            </div>

        </section>
    );
}