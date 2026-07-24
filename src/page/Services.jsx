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
                <Button variant="gold">
                    Request Equipment Quote
                </Button>
                <Button variant="navy">
                    Talk to a Specialist
                </Button>
            </Hero>
            <Paginator />
        </div>
    );
}
