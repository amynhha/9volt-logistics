import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import contact from "../assets/contact.jpg"
import Paginator from "../component/Paginator";
import Button from "../component/Button";

export default function Contact() {
    return (
        <div>
            <NavBar />
            <Hero
                img={contact}
                title="We’re Ready, Are You?"
                text="Have a question, need a custom quote, or want to partner up? Our team is available 24/7 to keep your business moving forward."
            >
                <Button variant="gold">
                    Get in Touch Now
                </Button>
            </Hero>
            <Paginator />
        </div>
    );

}
