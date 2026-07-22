import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import Button from "../component/Button";
import ReasonCard from "../component/ReasonCard";
import heroImage1 from "../assets/hero1.png";
import AboutSection from "../component/AboutSection";
import Slider from "../component/Slider";
import Comparison from "../component/Comparison";
import Paginator from "../component/Paginator";

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
                    "Real-time  communication and shipment updates",
                    "Transportation solutions tailored to your business needs",
                ]}
            >
                <Button variant="gold" link="/shippers">
                    Get a Freight Quote
                </Button>

                <Button variant="navy" link="/carriers">
                    Become a Carrier
                </Button>
            </Hero>
            <Comparison />
            <ReasonCard />
            <Slider />
            <AboutSection />
            <Paginator />

        </>
    );
}