import { FaArrowRight, FaShieldAlt, FaBullseye, FaHandshake, FaBolt } from "react-icons/fa";
import hasanImg from "../assets/hasan.jpg";
import BackButton from "./BackButton";

const valueIcons = {
    Integrity: <FaShieldAlt />,
    Precision: <FaBullseye />,
    Partnership: <FaHandshake />,
    Innovation: <FaBolt />,
    Drive: <FaBolt />,
};

const valueDescriptions = {
    Integrity: "We do what we say and stand behind every commitment.",
    Precision: "Every detail matters. We plan, execute, and deliver.",
    Partnership: "We win when our shippers and carriers win.",
    Innovation: "We are committed to constant improvement and growth.",
    Drive: "We are committed to constant improvement and growth.",
};

export default function FounderSlide({ founder, nextFounder, prevFounder, current, total }) {

    const changeFounder = (action) => {
        action();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    const storyParagraphs = founder.story
        ? founder.story.split("\n").filter(p => p.trim())
        : [];

    const isFirst = current === 0;

    return (
        <div className="fs-slide">
            {/* ── HERO ── */}
            <div className="fs-hero" id="intro">
                <div className="fs-hero-left">
                    <BackButton />
                    <p className="fs-eyebrow">/ Founder Story</p>
                    <h1 className="fs-name">
                        {founder.name.split(" ")[0]}<br />
                        <span className="fs-name-gold">
                            {founder.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>
                    <p className="fs-title">{founder.title.toUpperCase()} — 9VOLT LOGISTICS</p>
                    <div className="fs-rule" />
                    <p className="fs-intro">{founder.intro}</p>

                    {isFirst ? (
                        <button className="fs-next-btn" onClick={nextFounder}>
                            VIEW CO-FOUNDER STORY <FaArrowRight />
                        </button>
                    ) : (
                        <button className="fs-next-btn" onClick={prevFounder}>
                            ← VIEW FOUNDER STORY
                        </button>
                    )}
                </div>

                <div className="fs-hero-right">
                    <img src={founder.image} alt={founder.name} className="fs-hero-img" />
                </div>
            </div>

            {/* ── STORY ── */}
            {storyParagraphs.length > 0 ? (
                <div className="fs-story-section">
                    <p className="fs-eyebrow">/ The Story</p>
                    <h2 className="fs-story-title">
                        Experience that built<br />a better standard.
                    </h2>
                    <div className="fs-story-grid">
                        {storyParagraphs.slice(0, 3).map((para, i) => (
                            <div key={i} className="fs-story-card">
                                <div className="fs-story-icon">
                                    {i === 0 ? <FaShieldAlt /> : i === 1 ? <FaBullseye /> : <FaHandshake />}
                                </div>
                                <p>{para.trim()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="fs-story-section">
                    <p className="fs-eyebrow">/ The Story</p>
                    <h2 className="fs-story-title">Biography coming soon.</h2>
                    <div className="fs-story-grid">
                        {[0, 1, 2].map((_, i) => (
                            <div key={i} className="fs-story-card">
                                <div className="fs-story-icon">
                                    {i === 0 ? <FaShieldAlt /> : i === 1 ? <FaBullseye /> : <FaHandshake />}
                                </div>
                                <p style={{ color: "#4a5568", fontStyle: "italic" }}>
                                    Details coming soon.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ── VALUES ── */}
            <div className="fs-values-section">
                <div className="fs-values-left">
                    <p className="fs-eyebrow">/ What Drives Us</p>
                    <h2 className="fs-values-title">
                        Built on values.<br />Focused on results.
                    </h2>
                    <div className="fs-dots">
                        {[...Array(total)].map((_, i) => (
                            <span
                                key={i}
                                className={`fs-dot ${i === current ? "fs-dot-active" : ""}`}
                            />
                        ))}
                    </div>
                </div>

                {founder.values?.length > 0 ? (
                    <div className="fs-values-grid">
                        {founder.values.map((val) => (
                            <div key={val} className="fs-value-card">
                                <div className="fs-value-icon">{valueIcons[val]}</div>
                                <div className="fs-value-name">{val.toUpperCase()}</div>
                                <p className="fs-value-desc">{valueDescriptions[val]}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="fs-values-grid">
                        {["Integrity", "Precision", "Partnership", "Drive"].map((val) => (
                            <div key={val} className="fs-value-card" style={{ opacity: 0.4 }}>
                                <div className="fs-value-icon">{valueIcons[val]}</div>
                                <div className="fs-value-name">{val.toUpperCase()}</div>
                                <p className="fs-value-desc">Coming soon.</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ── LEADERSHIP ── */}
            <div className="fs-leadership-section">

                {/* Co-founder slide: Hasan card on LEFT */}
                {!isFirst && (
                    <div
                        className="fs-next-card"
                        onClick={() => changeFounder(prevFounder)}
                        style={{ cursor: "pointer" }}
                    >
                        <FaArrowRight
                            className="fs-next-card-arrow"
                            style={{ transform: "rotate(180deg)" }}
                        />
                        <div className="fs-next-card-img-wrap">
                            <img src={hasanImg} alt="Hasan" className="fs-next-card-img" />
                        </div>
                        <div className="fs-next-card-info">
                            <p className="fs-eyebrow">Founder Story</p>
                            <h3>View Hasan's Story</h3>
                        </div>
                    </div>
                )}

                <div className="fs-leadership-left">
                    <p className="fs-eyebrow">/ Our Leadership</p>
                    <h2 className="fs-leadership-title">Stronger together.</h2>
                    <p className="fs-leadership-sub">
                        {isFirst ? "Swipe to meet our co-founder." : "Meet our founder."}
                    </p>
                    <div className="fs-rule" />
                    <div className="fs-dots">
                        {[...Array(total)].map((_, i) => (
                            <span
                                key={i}
                                className={`fs-dot ${i === current ? "fs-dot-active" : ""}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Founder slide: co-founder card on RIGHT */}
                {isFirst && (
                    <div
                        className="fs-next-card"
                        onClick={() => changeFounder(nextFounder)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="fs-next-card-img-wrap">
                            <img src={hasanImg} alt="Hasan" className="fs-next-card-img" />
                        </div>
                        <div className="fs-next-card-info">
                            <p className="fs-eyebrow" >Co-Founder Story</p>
                            <h3>Coming Soon</h3>
                        </div>
                        <FaArrowRight className="fs-next-card-arrow" />
                    </div>
                )}

            </div>

        </div>
    );
}