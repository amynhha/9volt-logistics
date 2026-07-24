import "../App.css";
import communicate from "../assets/communicate.png";
import dispatch from "../assets/dispatch.png";

export default function AboutSection() {
    return (
        <section className="about-section">

            <div className="about-header">
                <h1>THE 9VOLT DIFFERENCE</h1>

                <p>
                    At <span>9Volt Logistics</span>, we deliver dependable freight
                    solutions built on professionalism, trust, and unwavering
                    commitment. We connect shippers with reliable carrier partners,
                    providing seamless transportation services anytime, anywhere,
                    for virtually any type of freight.
                </p>
            </div>

            <div className="about-grid">

                <div className="about-image-card">
                    <img src={communicate} alt="Mission" />
                </div>

                <div className="about-text">
                    <h2>Our Mission</h2>

                    <p>
                        Our approach is simple: build lasting relationships,
                        communicate with transparency, and execute every shipment
                        with precision. Every load represents a promise to our
                        customers, and we take that responsibility seriously.
                    </p>
                </div>

                <div className="about-stat">
                    <h2>24/7</h2>

                    <h3>RESPONSIVE COMMUNICATION</h3>

                    <p>
                        Keeping shippers and carriers informed through every
                        stage of the shipping process.
                    </p>
                </div>

                <div className="about-image-card">
                    <img src={dispatch} alt="Warehouse" />
                </div>

                <div className="about-stat large">
                    <h2>ONE</h2>

                    <h3>TRUSTED PARTNER</h3>

                    <p>
                        From pickup to delivery, we provide dependable logistics
                        solutions tailored to every shipment.
                    </p>
                </div>

                <div className="about-closing">
                    <h2>Driven by Excellence</h2>

                    <p>
                        We don't just move freight—we build confidence. Through
                        integrity, accountability, and exceptional service, we
                        strive to be the logistics partner businesses trust for
                        every mile ahead.
                    </p>
                </div>

            </div>

        </section>
    );
}