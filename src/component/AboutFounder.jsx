import founder from "../assets/hasan.jpg";
import Button from "./Button";
import "../App.css";

export default function AboutFounder({ id }) {
    return (
        <section id={id} className="founder-section">
            <div className="founder-card">

                <div className="founder-content">

                    <span className="founder-label">
                        FOUNDER
                    </span>

                    <h2>
                        Hasan <br/>
                        Alkinani
                    </h2>

                    <p>
                        Raised in a family with deep roots in the trucking 
                        industry, <strong> Hasan Alkinani </strong> learned early on that every 
                        load behind a truck represents someone’s livelihood and reputation. 
                        He founded <strong> 9Volt Logistics </strong> 
                        to bring a higher standard of reliability to the road. 
                    </p>

                    <Button variant="gold" link="/founder">
                        Learn More
                    </Button>

                </div>

                <div className="founder-image">
                    <img src={founder} alt="Founder" />
                </div>

            </div>
        </section>
    );
}