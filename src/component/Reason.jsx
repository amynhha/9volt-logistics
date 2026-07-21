import "../App.css";
import { CiClock1 } from "react-icons/ci";
import { PiShippingContainerLight } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Reason() {
    return (
        <section className="features-section">
            <h1 className="features-title">Why 9Volt Logistics?</h1>
            <div className="features">
            <div className="feature">
                <div className="icon">
                    <CiClock1/>
                </div>
                <h3>FAST RESPONSE</h3>
                <p>
                    Quick communication from pickup to delivery. Dedicated support
                    throughout the shipping process.
                </p>
            </div>

            <div className="feature">
                <div className="icon">
                    <PiShippingContainerLight/>
                </div>
                <h3>SHIPMENT VISIBILITY</h3>
                <p>
                    Stay informed with consistent updates. Clear communication every
                    step of the way.
                </p>
            </div>

            <div className="feature">
                <div className="icon">
                    <LiaShippingFastSolid/>
                </div>
                <h3>RELIABLE CARRIER NETWORK</h3>
                <p>
                    Partnered with qualified and dependable carriers. Focused on safe
                    and efficient transportation.
                </p>
            </div>

            <div className="feature">
                <div className="icon">
                    <HiOutlineUserGroup/>
                </div>
                <h3>STRONG PARTNERSHIPS</h3>
                <p>
                    Building long-term relationships with partners. Committed to trust,
                    transparency, and reliability.
                </p>
            </div>
            </div>
        </section>
    );
}