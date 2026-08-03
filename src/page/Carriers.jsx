import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import carrier from "../assets/carrier.jpg";
import Paginator from "../component/Paginator";
import Benefits from "../component/Benefits";
import BecomeCarrier from "../component/BecomeCarrier";
import Button from "../component/Button";

export default function Carriers() {
    return (
        <div>
            <NavBar />
            <Hero
                img={carrier}
                title="Haul Better"
                text="Access high-paying consistent loads, quick payment options, and 24/7 dedicated dispatch support across the nation."
            >
                <Button variant="gold"
                    onClick={() =>
                        document
                            .getElementById("carrierPartner")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                    }>
                    Become a Partner Carrier
                </Button>
                <Button variant="navy"
                    onClick={() =>
                        document
                            .getElementById("benefits")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                    }>
                    View Partner Benefits
                </Button>
            </Hero>
            <BecomeCarrier id="carrierPartner" />
            <Benefits id="benefits" />
            <Paginator />
        </div>
    );
}
