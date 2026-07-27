import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import contact from "../assets/contact.jpg"
import Paginator from "../component/Paginator";
import Button from "../component/Button";
import ContactSection from "../component/ContactSection";

export default function Contact() {
    return (
        <div>
            <NavBar />
            <Hero
                img={contact}
                title="We’re Ready, Are You?"
                text="Have a question, need a custom quote, or want to partner up? Our team is available 24/7 to keep your business moving forward."
            >
                <Button variant="gold"
                    onClick={() =>
                        document
                            .getElementById("getInTouch")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                    }>
                    Get in Touch Now
                </Button>
            </Hero>
            <ContactSection id="getInTouch" />
            <Paginator />
        </div>
    );

}
