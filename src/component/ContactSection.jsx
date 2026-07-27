import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
} from "react-icons/fi";

export default function ContactSection() {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_KEY,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            alert("Your message has been sent successfully!");

            setForm({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <section className="contact-section">

            <div className="contact-header">

                <h2>
                    Let's Move Your
                    <span> Freight.</span>
                </h2>

                <p>
                    Whether you're shipping freight or looking for
                    capacity, our team is available 24 hours a day.
                </p>
            </div>

            <div className="contact-cards">

                <div className="contact-card">
                    <FiMapPin />
                    <h4>Office</h4>
                    <p>Lincoln, Nebraska</p>
                </div>

                <div className="contact-card">
                    <FiPhone />
                    <h4>Phone</h4>
                    <p>(817) 495-1675</p>
                </div>

                <div className="contact-card">
                    <FiMail />
                    <h4>Email</h4>
                    <p>hasan@9voltlogistics.com</p>
                </div>

                <div className="contact-card">
                    <FiClock />
                    <h4>Hours</h4>
                    <p>24 Hours / 7 Days</p>
                </div>

            </div>

            <div className="contact-content">

                <div className="contact-map">

                    <iframe
                        title="9Volt Logistics"
                        src="https://maps.google.com/maps?q=Lincoln,Nebraska&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                    
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={form.company}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="How can we help?"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        SEND MESSAGE
                    </button>

                </form>

            </div>

        </section>
    );
}