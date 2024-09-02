import React from "react";
import Option from "./Option";

export default function Question({ info, handleSelection }) {

    let styles = {};

    return (
        <li className="question">
            <p className="que-text">{decodeURIComponent(info.que)}</p>
            <div className="que-options">
                {info.options.map((option) => {
                    return (
                        <Option
                            key={option.value}
                            option={option}
                            info={info}
                            handleSelection={handleSelection}
                        />
                    )
                })}

            </div>
        </li>
    )
}
// (<button value={option.isCorrect} key={option.value} onClick={(e) => handleSelection(e, info.id)}>{decodeURIComponent(option.value)}</button>)
// return (
//     <label
//         htmlFor={option.value}
//         key={option.value}
//         onClick={(e) => handleSelection(e, info.id)}
//     >
//         <input
//             id={option.value}
//             type="radio" name={info.id}
//         />
//         {decodeURIComponent(option.value)}
//     </label>
// )