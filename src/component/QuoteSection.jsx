import { useState } from "react";
import Calculator from "./Calculator";
import GetQuote from "./GetQuote";

export default function QuoteSection() {
    const [showQuote, setShowQuote] = useState(false);

    const [quoteData, setQuoteData] = useState({
        company: "",
        fullName: "",
        email: "",
        phone: "",

        origin: "",
        destination: "",

        commodity: "",
        freightType: "",

        weight: "",
        length: "",
        width: "",
        height: "",

        pickupDate: "",
        deliveryDate: "",

        contactMethod: "Email",

        referral: "",

        comments: "",

        distance: 0,
        estimate: 0,
    });

    const proceedToQuote = (estimateData) => {

        setQuoteData({
            ...quoteData,
            ...estimateData
        });


        setTimeout(() => {
            setShowQuote(true);
        }, 50);

    };

    const backToCalculator = () => {
        setTimeout(() => {
            setShowQuote(false);
        }, 50);
    };

    return (
        <section className="quote-section">

            <div className="quote-wrapper">

                {/* Calculator */}

                <div
                    className={`calculator-page ${showQuote ? "slide-left" : "active-page"
                        }`}
                >
                    <Calculator
                        onContinue={proceedToQuote}
                    />
                </div>

                {/* Quote */}

                <div
                    className={`quote-page ${showQuote ? "active-page" : "slide-right"
                        }`}
                >
                    <GetQuote
                        data={quoteData}
                        goBack={backToCalculator}
                    />
                </div>

            </div>

        </section>
    );
}