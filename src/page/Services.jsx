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
                title=
                "Freight Solutions You Can Trust"
                text="At 9Volt Logistics, we provide reliable 
                freight brokerage services backed by responsive
                communication, trusted carrier partnerships, 
                and personalized support. Whether you're shipping
                a single load or managing ongoing freight, we're 
                committed to delivering dependable transportation 
                solutions tailored to your business.
                "
            >
                <Button variant="gold">
                    Request a Quote
                </Button>

            </Hero>
            <Paginator />
        </div>
    );
}
