import { useState } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { freightOptions } from "../utils/freightOptions";

import {
    FaArrowLeft,
    FaPaperPlane,
    FaMapMarkerAlt,
    FaTruck,
    FaWeightHanging,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaDollarSign,
    FaCalendarAlt,
    FaRulerCombined,
    FaBoxOpen,
    FaRoad,
} from "react-icons/fa";

export default function GetQuote({ data, goBack }) {
    const selectStyles = {
        control: (base) => ({
            ...base,
            background: "#081629",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: "12px",
            minHeight: "48px",
            boxShadow: "none",
            cursor: "pointer",
        }),
        menu: (base) => ({
            ...base,
            background: "#102749",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,.12)",
            zIndex: 9999,
        }),
        option: (base, { isFocused, isSelected }) => ({
            ...base,
            background: isSelected ? "#E4B14C" : isFocused ? "#173761" : "#102749",
            color: isSelected ? "#081629" : "white",
            cursor: "pointer",
            borderRadius: "8px",
            margin: "2px 4px",
            width: "calc(100% - 8px)",
        }),
        singleValue: (base) => ({ ...base, color: "white" }),
        placeholder: (base) => ({ ...base, color: "#8fa1bb" }),
        indicatorSeparator: () => ({ display: "none" }),
        dropdownIndicator: (base) => ({ ...base, color: "#8fa1bb" }),
    };

    const contactOptions = [
        { value: "email", label: "Email" },
        { value: "phone", label: "Phone" },
        { value: "text", label: "Text" },
    ];

    const [sending, setSending] = useState(false);
    const [contact, setContact] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        preferredContact: "",
        pickupDate: "",
        deliveryDate: "",
        commodity: "",
        length: "",
        width: "",
        height: "",
        comments: ""
    });

    function update(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const required = {
            fullName: "Full Name",
            company: "Company",
            email: "Email",
            phone: "Phone",
            commodity: "Commodity",
            pickupDate: "Pickup Date",
            deliveryDate: "Delivery Date",
        };

        for (const [field, label] of Object.entries(required)) {
            if (!contact[field].trim()) {
                alert(`Please fill in: ${label}`);
                return;
            }
        }

        setSending(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    origin: data.origin,
                    destination: data.destination,
                    distance: Number(data.distance).toLocaleString(),
                    weight: Number(data.weight).toLocaleString(),
                    freightType: data.freightType,
                    estimate: `$${Number(data.estimate).toLocaleString()} — $${Number(data.estimate + 1000).toLocaleString()}`,
                    fullName: contact.fullName,
                    company: contact.company,
                    email: contact.email,
                    phone: contact.phone,
                    preferredContact: contact.preferredContact || "-",
                    pickupDate: contact.pickupDate,
                    deliveryDate: contact.deliveryDate,
                    commodity: contact.commodity,
                    length: contact.length || "-",
                    width: contact.width || "-",
                    height: contact.height || "-",
                    comments: contact.comments || "-",
                    to_email: "hasan@9voltlogistics.com"
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            alert("Quote request submitted successfully! We'll be in touch shortly.");
        } catch (err) {
            console.error("Email error:", err);
            alert("Failed to send. Please try again or contact us directly.");
        } finally {
            setSending(false);
        }
    }

    return (
        <div className="getquote-container">

            <div className="calculator-header">
                <h2>Request Your Official Quote</h2>
                <p>Review your shipment details and submit your contact info to receive a formal quote.</p>
            </div>

            {/* SUMMARY BAR */}
            <div className="gq-summary-bar">
                <div className="gq-summary-item">
                    <FaMapMarkerAlt className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">ORIGIN</div>
                        <div className="gq-summary-value">{data.origin}</div>
                    </div>
                </div>

                <div className="gq-summary-divider" />

                <div className="gq-summary-item">
                    <FaMapMarkerAlt className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">DESTINATION</div>
                        <div className="gq-summary-value">{data.destination}</div>
                    </div>
                </div>

                <div className="gq-summary-divider" />

                <div className="gq-summary-item">
                    <FaRoad className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">DISTANCE</div>
                        <div className="gq-summary-value">{Number(data.distance).toLocaleString()} mi</div>
                    </div>
                </div>

                <div className="gq-summary-divider" />

                <div className="gq-summary-item">
                    <FaWeightHanging className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">WEIGHT</div>
                        <div className="gq-summary-value">{Number(data.weight).toLocaleString()} lbs</div>
                    </div>
                </div>

                <div className="gq-summary-divider" />

                <div className="gq-summary-item">
                    <FaTruck className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">FREIGHT TYPE</div>
                        <div className="gq-summary-value">
                            {freightOptions.find(o => o.value === data.freightType)?.label || data.freightType}
                        </div>
                    </div>
                </div>

                <div className="gq-summary-divider" />

                <div className="gq-summary-item">
                    <FaDollarSign className="gq-summary-icon" />
                    <div>
                        <div className="gq-summary-label">ESTIMATE</div>
                        <div className="gq-summary-value gq-price">
                            ${Number(data.estimate).toLocaleString()} — ${Number(data.estimate + 1000).toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN FORM CARD */}
            <div className="gq-form-card">

                {/* LEFT */}
                <div className="gq-form-left">
                    <h3 className="gq-section-title">Contact Information</h3>

                    <div className="gq-field">
                        <label className="calc-label"><FaUser /> FULL NAME *</label>
                        <input name="fullName" className="calc-field-input" placeholder="John Smith" value={contact.fullName} onChange={update} />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaBuilding /> COMPANY *</label>
                        <input name="company" className="calc-field-input" placeholder="Your company name" value={contact.company} onChange={update} />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaEnvelope /> EMAIL *</label>
                        <input name="email" type="email" className="calc-field-input" placeholder="email@example.com" value={contact.email} onChange={update} />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaPhone /> PHONE *</label>
                        <input name="phone" className="calc-field-input" placeholder="(555) 000-0000" value={contact.phone} onChange={update} />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaPhone /> PREFERRED CONTACT</label>
                        <Select
                            options={contactOptions}
                            styles={selectStyles}
                            placeholder="Select method"
                            menuPortalTarget={document.body}
                            menuPosition="fixed"
                            value={contactOptions.find(o => o.value === contact.preferredContact) || null}
                            onChange={(selected) =>
                                setContact(prev => ({ ...prev, preferredContact: selected?.value || "" }))
                            }
                        />
                    </div>

                    <h3 className="gq-section-title" style={{ marginTop: "28px" }}>Shipment Details</h3>

                    <div className="gq-field">
                        <label className="calc-label"><FaBoxOpen /> COMMODITY *</label>
                        <input name="commodity" className="calc-field-input" placeholder="e.g. Auto Parts, Electronics" value={contact.commodity} onChange={update} />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaRulerCombined /> DIMENSIONS (inches)</label>
                        <div className="gq-dimensions">
                            <input name="length" className="calc-field-input" placeholder="Length" value={contact.length} onChange={update} type="number" />
                            <input name="width" className="calc-field-input" placeholder="Width" value={contact.width} onChange={update} type="number" />
                            <input name="height" className="calc-field-input" placeholder="Height" value={contact.height} onChange={update} type="number" />
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="gq-form-right">
                    <h3 className="gq-section-title">Scheduling</h3>

                    <div className="gq-field">
                        <label className="calc-label"><FaCalendarAlt /> PICKUP DATE *</label>
                        <DatePicker
                            selected={contact.pickupDate ? new Date(contact.pickupDate) : null}
                            onChange={(date) =>
                                setContact(prev => ({ ...prev, pickupDate: date ? date.toISOString().split("T")[0] : "" }))
                            }
                            placeholderText="Select pickup date"
                            minDate={new Date()}
                            className="calc-field-input"
                            wrapperClassName="gq-datepicker-wrapper"
                            calendarClassName="gq-calendar"
                        />
                    </div>

                    <div className="gq-field">
                        <label className="calc-label"><FaCalendarAlt /> DELIVERY DATE *</label>
                        <DatePicker
                            selected={contact.deliveryDate ? new Date(contact.deliveryDate) : null}
                            onChange={(date) =>
                                setContact(prev => ({ ...prev, deliveryDate: date ? date.toISOString().split("T")[0] : "" }))
                            }
                            placeholderText="Select delivery date"
                            minDate={contact.pickupDate ? new Date(contact.pickupDate) : new Date()}
                            className="calc-field-input"
                            wrapperClassName="gq-datepicker-wrapper"
                            calendarClassName="gq-calendar"
                        />
                    </div>

                    <h3 className="gq-section-title" style={{ marginTop: "28px" }}>Additional Notes</h3>

                    <textarea
                        name="comments"
                        className="gq-textarea"
                        rows={9}
                        placeholder="Anything else you'd like us to know? Special requirements, preferred pickup window, fragile items, etc."
                        value={contact.comments}
                        onChange={update}
                    />

                    <div className="gq-actions">
                        <button type="button" className="calc-edit-btn" onClick={goBack}>
                            <FaArrowLeft /> BACK TO CALCULATOR
                        </button>

                        <button
                            className="calc-continue-btn"
                            onClick={handleSubmit}
                            disabled={sending}
                        >
                            <FaPaperPlane />
                            {sending ? "SUBMITTING..." : "SUBMIT QUOTE REQUEST"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}