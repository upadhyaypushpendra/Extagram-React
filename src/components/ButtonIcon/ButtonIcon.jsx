import React from "react";
import "./btn-icon.css";

export default function ButtonIcon({iconSrc,altText,onClick}) {
    return (
        <div className={"btn-icon-wrapper"} onClick={()=>onClick()}>
            <button style={{backgroundImage: {iconSrc}}}>
                <img src={iconSrc} alt={altText} />
            </button>
        </div>
    );
}