import aboutUs from "../assets/aboutUs.png";
import "../App.css";
import Button from "../component/Button";
import about from "../assets/about.jpg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-image">

          <div className="corner top-left"></div>
          <div className="corner bottom-left"></div>

          <div className="bars top-bars">
            {[...Array(8)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="bars bottom-bars">
            {[...Array(6)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <img src={about} alt="About Us" />
        </div>

        {/* RIGHT */}
        <div className="about-content">

          <div className="bars right-top-bars">
            {[...Array(8)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="top-line"></div>

          <h2>About Us</h2>

          <div className="middle-line"></div>

          <p>
            9Volt Logistics LLC is a Nebraska-based freight brokerage dedicated
            to connecting businesses with reliable transportation solutions
            across the United States.
            <br />
            <br />
            We pride ourselves on responsive service, trusted carrier
            partnerships, and clear communication, ensuring every shipment is
            handled with care from pickup to delivery.
            <br />
            <br />
            Our mission is simple: provide dependable logistics solutions that
            help our customers move forward with confidence.
          </p>

          <Button variant="gold"  link="/about">
            Get to Know Us Better
          </Button>

          <div className="bars bottom-content-bars">
            {[...Array(8)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="bottom-line"></div>

        </div>
      </div>
    </section>
  );
}