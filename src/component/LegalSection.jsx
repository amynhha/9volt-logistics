import {
    FaShieldAlt,
    FaDatabase,
    FaLock,
    FaBalanceScale,
    FaFileSignature,
    FaGavel,
    FaExternalLinkAlt,
    FaClipboardCheck,
    FaExclamationTriangle,
    FaCheckCircle,
} from "react-icons/fa";


const icons = {

    shield: <FaShieldAlt />,

    database: <FaDatabase />,

    lock: <FaLock />,

    balance: <FaBalanceScale />,

    file: <FaFileSignature />,

    gavel: <FaGavel />,

    external: <FaExternalLinkAlt />,

    clipboard: <FaClipboardCheck />,

    warning: <FaExclamationTriangle />,

};


export default function LegalSection({ policy }) {

    return (

        <section
            id={policy.id}
            className="legal-policy"
        >

            {/* Header */}

            <div className="legal-policy-header">

                <div className="legal-policy-title">


                    <div className="legal-policy-icon">

                        {icons[policy.heroIcon]}

                    </div>


                    <div>

                        <h2>
                            {policy.title}
                        </h2>


                        <span>
                            Effective Date: {policy.date}
                        </span>

                    </div>


                </div>


            </div>



            {/* Content */}

            <div className="legal-grid">


                {policy.sections.map((section) => (


                    <div
                        className="legal-card"
                        key={section.heading}
                    >


                        <div className="legal-card-header">


                            <div className="legal-card-icon">

                                {icons[section.icon]}

                            </div>



                            <h3>
                                {section.heading}
                            </h3>


                        </div>



                        {section.text && (

                            <p className="legal-card-text">

                                {section.text}

                            </p>

                        )}



                        {section.bullets && (

                            <ul className="legal-list">


                                {section.bullets.map((bullet) => (


                                    <li key={bullet}>


                                        <FaCheckCircle />


                                        <span>
                                            {bullet}
                                        </span>


                                    </li>


                                ))}


                            </ul>

                        )}


                    </div>


                ))}


            </div>


        </section>

    );

}