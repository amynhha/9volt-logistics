import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_LOCATIONIQ_KEY;

export default function PlacesInput({
    value,
    onChange,
    placeholder,
    disabled
}) {
    const [query, setQuery] = useState(value || "");
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);

    // Keep local query in sync if parent updates the value
    useEffect(() => {
        setQuery(value);
    }, [value]);

    // Debounced search
    useEffect(() => {
        if (selected) return;
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(() => {
            searchPlace(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    async function searchPlace(text) {
        try {
            const res = await axios.get(
                "https://us1.locationiq.com/v1/autocomplete",
                {
                    params: {
                        key: API_KEY,
                        q: text,
                        limit: 5,
                        countrycodes: "us",
                        format: "json",
                    },
                }
            );
            setSuggestions(res.data);
        } catch (err) {
            console.error("LocationIQ error:", err);
            setSuggestions([]);
        }
    }

    function formatPlace(place) {
        const addr = place.address || {};
        const city = addr.city || addr.town || addr.village || "";
        const state = addr.state || "";
        return city && state ? `${city}, ${state}` : place.display_name;
    }

    function selectPlace(place) {
        const formatted = formatPlace(place);
        onChange(formatted);
        setQuery(formatted);
        setSuggestions([]);
        setSelected(true);
    }

    return (
        <div className="places-wrapper">
            <input
                value={query}
                placeholder={placeholder}
                disabled={disabled}
                className="calc-field-input"
                onChange={(e) => {
                    setQuery(e.target.value);
                    onChange(e.target.value);
                    setSelected(false);
                }}
                onBlur={() => setTimeout(() => setSuggestions([]), 150)}
            />

            {suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((place) => (
                        <div
                            key={place.place_id}
                            className="suggestion-item"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                selectPlace(place);
                            }}
                        >
                            {formatPlace(place)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}