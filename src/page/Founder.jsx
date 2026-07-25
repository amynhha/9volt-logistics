import { useState } from "react";
import { founders } from "../utils/founders";
import FounderSlide from "../component/FounderSlide";

export default function Founder() {
    const [current, setCurrent] = useState(0);

    const nextFounder = () => {
        if (current < founders.length - 1) setCurrent(current + 1);
    };

    const prevFounder = () => {
        if (current > 0) setCurrent(current - 1);
    };

    return (
        <section className="fs-section">
            <div
                className="fs-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {founders.map((founder, i) => (
                    <FounderSlide
                        key={founder.id}
                        founder={founder}
                        nextFounder={nextFounder}
                        prevFounder={prevFounder}
                        current={current}
                        total={founders.length}
                    />
                ))}
            </div>
        </section>
    );
}