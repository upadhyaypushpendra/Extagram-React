import "./link.css";
import React from "react";

export default function Link({text,fontSize}){
    return (
        <a href="#">
            <div className="link" style={{fontSize:`${fontSize}`}}>{text}</div>
        </a>
    );
}