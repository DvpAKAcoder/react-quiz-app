import React from "react";
import styled from "styled-components";

export default function Option({ option, info, handleSelection }) {

    const isCorrect = option.value === info.correct_answer;
    const isSelected = info.checked === option.value;

    // Determine the color based on the score and selection
    let optionColor = {};

    if (info.score === 1 && isSelected) {
        optionColor = { backgroundColor: "lightgreen" }; // Selected option is correct
    } else if (info.score === 0 && isSelected) {
        optionColor = { backgroundColor: "lightcoral" }; // Selected option is incorrect
    } else if (info.score === 0 && isCorrect) {
        optionColor = { backgroundColor: "lightgreen" }; // Correct option when user got it wrong
    }

    return (
        <div className="option">
            <input
                id={option.value}
                type="radio"
                name={info.id}
                value={option.value}
                checked={info.checked == option.value ? true : false}
                onChange={(e) => handleSelection(e, info.id)}
                disabled={info.disabled}
            />
            <label
                htmlFor={option.value}
                style={(info.score !== null) ? { color: "#293264", ...optionColor } : {}}
            >
                {decodeURIComponent(option.value)}
            </label>
        </div>
    )
}