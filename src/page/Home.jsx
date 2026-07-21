import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import Button from "../component/Button";
import heroImage1 from "../assets/hero1.png";

export default function Home() {
    return (
        <>
            <NavBar />

            <Hero
                img={heroImage1}
                title="9Volt Logistics"
                text="Reliable logistics solutions connecting shippers with trusted carriers nationwide."
                subtext={[
                    "Fast and dependable freight coordination",
                    "Professional carrier partnerships",
                    "Real-time communication and shipment updates",
                    "Transportation solutions tailored to your business needs",
                ]}
            >
                <Button variant="gold">
                    Get a Freight Quote
                </Button>

                <Button variant="dark">
                    Become a Carrier
                </Button>
            </Hero>
        </>
    );
}