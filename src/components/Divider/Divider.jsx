import React from "react";
import './divider.css';
export default function Divider(){
    return (
        <div className="divider" >
            <div className="divider-line" />
            <div className="divider-text" >OR</div>
            <div className="divider-line" />
        </div>
    );
}