import React from "react";
import './story.css'
import userIcon from "./../../static/images/user-icon.png"
import RainbowCircle from "../RainbowCircle/RainbowCircle";
export default function Story({stories,width,height}) {
    return (
        <div className="story center"  style={{width:width,height:height}} >
            <RainbowCircle size={width} strokeWidth={2}/>
            <img src={userIcon} width={width-14} height={height-14} className="circle"/>
        </div>
    );
}

// <canvas width={width} height={height} className="rainbow-circle" />