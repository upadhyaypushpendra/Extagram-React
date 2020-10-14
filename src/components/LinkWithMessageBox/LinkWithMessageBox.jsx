import React from "react";
import "./linkwithmessagebox.css";
export default function LinkWithMessageBox({link,linkText,message}){
    return (
        <div className="link-container" >
            <p>{message}&nbsp;</p>
            <a className="blue-link" href={link}>{linkText}</a>
        </div>
    );
}