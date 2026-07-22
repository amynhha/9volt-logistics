import "../App.css";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import contact from "../assets/contact.jpg"

export default function Contact() {
    return (
        <div>
            <NavBar />
            <Hero
                img={contact}
                title="Let's Keep Your Freight Moving"
                text="Whether you're looking for shipping solutions, carrier partnerships, or simply have a question, our team is ready to help. Reach out today and we'll respond as quickly as possible."
                subtext={[
                    "Request a freight quote",
                    "Become a carrier partner",
                    "Speak with our logistics specialists",
                    "Fast responses and personalized support",
                ]}
            >
            </Hero>
        </div>
    );

}