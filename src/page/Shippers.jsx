import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import shipper from "../assets/shipper.jpg";

export default function Shippers() {
    return (
        <div>
            <NavBar />
            <Hero
                img={shipper}
                title="Reliable Freight Solutions"
                text="Whether you're moving a single load or managing a complex supply chain, 9Volt Logistics connects you with dependable carriers to ensure your freight arrives safely, on time, and within budget."
                subtext={[
                    "Access to a trusted nationwide carrier network",
                    "Competitive rates with transparent pricing",
                    "Real-time communication and shipment updates",
                    "Flexible solutions for full truckload (FTL) and less-than-truckload (LTL) freight",
                ]}
            >
            </Hero>
        </div>
    );
}