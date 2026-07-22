import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import aboutUs from "../assets/aboutUs.png";

export default function About() {
    return (
        <div>
            <NavBar />
            <Hero
                img={aboutUs}
                title="Move Your Freight With Confidence"
                text="At 9Volt Logistics, we believe transportation should be simple, dependable, and built on strong relationships. Our team is dedicated to connecting shippers with trusted carriers while delivering exceptional service every step of the way."
                subtext={[
                    "Customer-focused logistics solutions",
                    "Experienced professionals committed to reliability",
                    "Honest communication and transparent service",
                    "Dedicated to building lasting partnerships",
                ]}
            >
            </Hero>
        </div>
    );
}
