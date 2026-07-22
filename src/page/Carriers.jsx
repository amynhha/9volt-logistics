import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import carrier from "../assets/carrier.jpg";
import Paginator from "../component/Paginator";

export default function Carriers() {
    return (
        <div>
            <NavBar />
            <Hero
                img={carrier}
                title="Become Our Partner"
                text="We work alongside professional carriers to provide consistent freight opportunities, prompt communication, and long-term partnerships built on trust and reliability."
                subtext={[
                    "Quality freight opportunities across the country",
                    "Fast, responsive support from our logistics team",
                    "Quick issue resolution and clear communication",
                    "Long-term relationships with dependable partners",
                ]}
            >
            </Hero>
            <Paginator />
        </div>
    );
}
