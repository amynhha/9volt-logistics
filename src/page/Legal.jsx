import "../App.css";

import { legalSections } from "../utils/legalSections";

import BackButton from "../component/BackButton";
import LegalSection from "../component/LegalSection";
import NavBar from "../component/NavBar";
import Paginator from "../component/Paginator";

import {
    FaBalanceScale,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";


export default function Legal() {

    return (

        <>

            <NavBar />


            <section className="legal-page">


                {/* Hero */}

                <div className="legal-hero">


                    <div className="legal-left">

                        <div className="legal-back-wrapper">
                            <BackButton />
                        </div>

                        <span className="legal-label">
                            Legal Information
                        </span>


                        <h1>
                            Legal Center
                        </h1>


                        <p>
                            Transparency, accountability, and compliance are
                            fundamental to how 9Volt Logistics operates.
                        </p>


                    </div>



                    <div className="legal-right">

                        <FaBalanceScale />

                    </div>


                </div>




                {/* Legal Sections */}

                {legalSections.map((policy) => (


                    <LegalSection

                        key={policy.title}

                        policy={policy}

                    />


                ))}




                {/* Contact */}

                <div className="legal-contact">


                    <h2>
                        Questions?
                    </h2>


                    <p>
                        For additional legal questions or documentation requests,
                        contact our administrative team.
                    </p>



                    <div className="legal-contact-items">


                        <div>

                            <FaEnvelope />

                            hasan@9voltlogistics.com

                        </div>



                        <div>

                            <FaPhoneAlt />

                            (817) 495-1675

                        </div>


                    </div>


                </div>



            </section>



            <Paginator />


        </>

    );

}