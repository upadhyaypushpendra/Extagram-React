import React from "react";
import "./stories.css"
import Story from "../Story/Story";

export default function Stories({stories}) {
    return (
        <div className="stories-container">
            <div className="stories">
                <div>
                    <Story width={56} height={56} />
                    <div>username of the user</div>
                </div>
                <div>
                    <Story width={56} height={56} />
                    <div>username</div>
                </div>
                <div>
                    <Story width={56} height={56} />
                    <div>username</div>
                </div>
                <div>
                    <Story width={56} height={56} />
                    <div>username</div>
                </div>
            </div>
        </div>

    );
}