import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import shipper from "../assets/shipper.jpg";
import Paginator from "../component/Paginator";
import QuoteSection from "../component/QuoteSection";
import Button from "../component/Button";

export default function Shippers() {
    return (
        <div>
            <NavBar />
            <Hero
                img={shipper}
                title="Ship Smarter"
                text="Connect your cargo with a vetted nationwide carrier network. Get real-time tracking, transparent pricing, and zero delays."
            >
                <Button variant="gold"
                    onClick={() =>
                        document
                            .getElementById("quote")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                    }>
                    Calculate Freight Rate
                </Button>
            </Hero>
            <QuoteSection id="quote"/>
            <Paginator />
        </div>
    );
}
