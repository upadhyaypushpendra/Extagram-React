import React from "react";
export default function RainbowCircle({size,strokeWidth}) {
    return (
        <svg height={size} width={size}>
            <defs>
                <linearGradient id="rainbowGradient" x1="0" y1="0" x2="4"  y2="0">
                    <stop offset="0%" stopColor="red"/>
                    <stop offset="50%" stopColor="blue"/>
                    <stop offset="70%" stopColor="red"/>
                    <stop offset="100%" stopColor="magenta"/>
                </linearGradient>
            </defs>
            <circle cx={size/2} cy={size/2} r={ (size/2)-2*strokeWidth} stroke="url(#rainbowGradient)" strokeWidth={strokeWidth} fill="transparent" />
        </svg>
    );
}