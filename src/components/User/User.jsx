import React from "react";
import "./user.css"
import RainbowCircle from "../RainbowCircle/RainbowCircle";
import userIcon from "../../static/images/user-icon.png";
export default function User({profileSize,username,description,strokeWidth}) {
    return (
        <div className={"user"}>
            <div className="center">
                <RainbowCircle strokeWidth={ strokeWidth? strokeWidth:1} size={profileSize}/>
                <img width={profileSize} height={profileSize} style={{position:"absolute"}} className="circle icon" src={userIcon} alt="Img"/>
            </div>
            <div><span>{username}</span><span>{description}</span></div>
        </div>
    );
}