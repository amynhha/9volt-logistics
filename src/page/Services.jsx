import "../App.css";
import Hero from "../component/Hero";
import Button from "../component/Button";
import NavBar from "../component/NavBar";
import heroImage2 from "../assets/hero2.png";
import Paginator from "../component/Paginator";

export default function Services() {
    return (
        <div>
            <NavBar />

            <Hero
                img={heroImage2}
                title="Smart Freight Solutions"
                text="Whether you need temp-controlled reefer freight, dedicated dry vans, fleet box trucks, or heavy flatbed transport—we connect your cargo with fully vetted carriers nationwide.
                "
            >
                <Button variant="gold" link="/shippers#quote">
                    Request a Freight Quote
                </Button>
                <Button variant="navy" link="/contact#getInTouch">
                    Get in Touch
                </Button>
            </Hero>
            <Paginator />
        </div>
    );
}
