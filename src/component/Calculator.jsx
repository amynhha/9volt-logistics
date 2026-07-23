import { useState } from "react";
import PlacesInput from "./PlacesInput";
import {
    FaMapMarkerAlt,
    FaTruck,
    FaWeightHanging,
    FaClock,
    FaInfoCircle,
    FaPencilAlt,
    FaArrowRight,
} from "react-icons/fa";
import { freightOptions } from "../utils/freightOptions";
import { calculateEstimate } from "../utils/CalculateEstimate";
import { getDistance } from "../utils/distanceApi";
import Select from "react-select";

export default function Calculator({ onContinue }) {

    const [loading, setLoading] = useState(false);
    const [locked, setLocked] = useState(false);

    const [estimate, setEstimate] = useState(null);
    const [distance, setDistance] = useState(0);
    const [transitDays, setTransitDays] = useState("");
    const [showEstimate, setShowEstimate] = useState(false);

    function continueQuote() {
        onContinue({
            ...form,
            freightTypeLabel: freightOptions.find(o => o.value === form.freightType)?.label,
            distance,
            estimate
        });
    }

    const selectStyles = {
        control: (base) => ({
            ...base,
            background: "#081629",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: "12px",
            height: "48px",
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
        singleValue: (base) => ({
            ...base,
            color: "white",
        }),
        placeholder: (base) => ({
            ...base,
            color: "#8fa1bb",
        }),
        indicatorSeparator: () => ({ display: "none" }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#8fa1bb",
        }),
    };

    const [form, setForm] = useState({
        origin: "",
        destination: "",
        freightType: "",
        weight: ""
    });

    function update(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function getTransitDays(miles) {
        if (miles < 500) return "1 - 2 Business Days";
        if (miles < 1000) return "2 - 3 Business Days";
        if (miles < 1500) return "3 - 4 Business Days";
        return "4 - 5 Business Days";
    }

    async function getEstimate() {
        try {
            setLoading(true);

            const miles = await getDistance(form.origin, form.destination);
            const price = calculateEstimate(form.freightType, Number(form.weight), miles);

            setDistance(miles);
            setEstimate(price);
            setTransitDays(getTransitDays(miles));
            setShowEstimate(true);
            setLocked(true);

        } catch (err) {
            alert(err.message || "Unable to calculate estimate");
        } finally {
            setLoading(false);
        }
    }

    function handleEdit() {
        setLocked(false);
        setShowEstimate(false);
        setEstimate(null);
    }

    function continueQuote() {
        onContinue({ ...form, distance, estimate });
    }

    const canEstimate =
        !loading &&
        form.origin &&
        form.destination &&
        form.freightType &&
        form.weight &&
        !locked;

    return (
        <div className="calculator-container">

            <div className="calculator-header">
                <h2>Freight Rate Calculator</h2>
                <p>Enter shipment details to receive an estimated cost.</p>
            </div>

            {/* TOP INPUT CARD */}
            <div className="calc-top-card">

                <div className="calc-top-grid">

                    {/* ORIGIN */}
                    <div className="calc-field">
                        <label className="calc-label">
                            <FaMapMarkerAlt className="calc-label-icon" />
                            ORIGIN
                        </label>
                        <div className="calc-field-input-wrap">
                            <PlacesInput
                                value={form.origin}
                                placeholder="City, State"
                                disabled={locked}
                                onChange={(value) =>
                                    setForm(prev => ({ ...prev, origin: value }))
                                }
                            />
                        </div>
                    </div>

                    {/* DESTINATION */}
                    <div className="calc-field">
                        <label className="calc-label">
                            <FaMapMarkerAlt className="calc-label-icon" />
                            DESTINATION
                        </label>
                        <div className="calc-field-input-wrap">
                            <PlacesInput
                                value={form.destination}
                                placeholder="City, State"
                                disabled={locked}
                                onChange={(value) =>
                                    setForm(prev => ({ ...prev, destination: value }))
                                }
                            />
                        </div>
                    </div>

                    {/* WEIGHT */}
                    <div className="calc-field">
                        <label className="calc-label">
                            <FaWeightHanging className="calc-label-icon" />
                            WEIGHT
                        </label>
                        <div className="calc-field-input-wrap calc-weight-wrap">
                            <input
                                type="number"
                                name="weight"
                                placeholder="12,000"
                                value={form.weight}
                                disabled={locked}
                                onChange={update}
                                className="calc-field-input"
                            />
                            <span className="calc-unit">lbs</span>
                        </div>
                    </div>

                    {/* FREIGHT TYPE */}
                    <div className="calc-field">
                        <label className="calc-label">
                            <FaTruck className="calc-label-icon" />
                            FREIGHT TYPE
                        </label>
                        <Select
                            options={freightOptions}
                            styles={selectStyles}
                            placeholder="Select type"
                            isDisabled={locked}
                            menuPortalTarget={document.body}
                            menuPosition="fixed"
                            value={freightOptions.find(o => o.value === form.freightType) || null}
                            onChange={(selected) =>
                                setForm(prev => ({ ...prev, freightType: selected?.value || "" }))
                            }
                        />
                    </div>

                </div>

                <div className="calc-btn-row">
                    <button
                        className="calc-estimate-btn"
                        onClick={getEstimate}
                        disabled={!canEstimate}
                    >
                        {loading ? "Calculating..." : "GET ESTIMATE"}{!loading && <FaArrowRight />}
                    </button>
                </div>

            </div>

            {/* ESTIMATE RESULT CARD */}
            {showEstimate && estimate !== null && (
                <div className="calc-result-card">

                    <div className="calc-result-image" />

                    <div className="calc-result-content">

                        <div className="calc-result-label">ESTIMATED SHIPPING COST</div>

                        <div className="calc-result-price">
                            ${estimate.toLocaleString()} - ${Math.round(estimate + 1000).toLocaleString()}
                        </div>

                        <div className="calc-result-transit">
                            <FaClock />
                            Transit Time: {transitDays}
                        </div>

                        <hr className="calc-result-divider" />

                        <div className="calc-result-note">
                            <FaInfoCircle className="calc-note-icon" />
                            <span>
                                This price is an estimate only and is based on current market conditions.
                                Final pricing may vary depending on pickup date, equipment availability,
                                fuel surcharge, accessorial services, and other factors.
                            </span>
                        </div>

                        <div className="calc-result-actions">
                            <button
                                className="calc-continue-btn"
                                onClick={continueQuote}
                            >
                                <FaArrowRight /> IF YOU ARE GOOD WITH THIS PRICE, MOVE FORWARD
                            </button>

                            <button
                                className="calc-edit-btn"
                                onClick={handleEdit}
                            >
                                <FaPencilAlt /> EDIT DETAILS
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}