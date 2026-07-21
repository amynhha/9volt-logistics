import "../App.css";

export default function Hero({
    img,
    title,
    text,
    subtext = [],
    children,
}) {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>

                    <p className="hero-description">
                        {text}
                    </p>

                    {subtext.length > 0 && (
                        <ul className="hero-list">
                            {subtext.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}

                    <div className="hero-buttons">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}