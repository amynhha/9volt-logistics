import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import aboutUsWider from "../assets/aboutUs_wider.png";
import Paginator from "../component/Paginator";
import Button from "../component/Button";

export default function About() {
    return (
        <div>
            <NavBar />
            <Hero
                img={aboutUsWider}
                title="Your High Voltage Alliance"
                text="We started 9Volt Logistics to bridge the gap between shippers who demand clarity and carriers who deserve fair partnerships."
            >
                <Button variant="gold">
                    Meet Our Team
                </Button>
                <Button variant="navy">
                    See Our Covergae
                </Button>
            </Hero>
            <Paginator />
        </div>
    );
}
