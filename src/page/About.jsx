import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import aboutUsWider from "../assets/aboutUs_wider.png";
import Paginator from "../component/Paginator";
import Button from "../component/Button";
import AboutSection from "../component/AboutSection";
import Slider from "../component/Slider";

export default function About() {
    return (
        <div>
            <NavBar />
            <Hero
                img={aboutUsWider}
                title="Your High Voltage Alliance"
                text="
                Every successful shipment begins with the right connection. 
                We bridge the gap between shippers and trusted carriers, 
                building reliable partnerships that keep your freight moving 
                efficiently, professionally, and with complete confidence
                "
            >
                <Button
                    variant="gold"
                    onClick={() =>
                        document
                            .getElementById("services")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                    }
                >
                    See Our Services
                </Button>
                <Button variant="navy">
                    Meet Our Team
                </Button>
            </Hero>

            <AboutSection />
            <Slider id="services" />

            <Paginator />
        </div>
    );
}
