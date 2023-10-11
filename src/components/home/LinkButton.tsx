import * as React from "react"
import { Link } from "gatsby"

import { useState } from "react";

export interface LinkButtonProps {
    label: string,
    to: string,
}

const LinkButton = ({ label, to }: LinkButtonProps) => {

    const [colorIndex, increaseColorIndex] = useState(
        Math.floor(Math.random() * 8)
    );

    const handleHover = () => {
        increaseColorIndex((colorIndex + 1) % 8);
    };

    const primaryColors = [
        'hover:bg-[#FF0000]', // Red
        'hover:bg-[#00CC00]', // Green
        'hover:bg-[#0000FF]', // Blue
        'hover:bg-[#FF00FF]', // Magenta
        'hover:bg-[#FFEA00]', // Yellow
        'hover:bg-[#00EEEE]', // Cyan
        'hover:bg-[#FFA500]', // Orange
        'hover:bg-[#800080]', // Purple
    ];

    return <Link to={to}>
        <div
            className={`border-2 border-black ${primaryColors[colorIndex]} hover:text-white flex justify-center w-20 p-1 inline-block`}
            onMouseLeave={handleHover}
        >
            {label}
        </div>
    </Link>
}

export default LinkButton
