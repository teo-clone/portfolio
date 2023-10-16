import * as React from "react"
import { Link } from "gatsby"

import { useState } from "react";

export interface LinkButtonProps {
    label: string,
    icon?: string,
    to: string,
}

const LinkButton = ({ label, icon, to }: LinkButtonProps) => {

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

    return <div
        className={`link-button flex gap-[5px] items-center px-[15px] py-[5px] border border-black ${primaryColors[colorIndex]} hover:text-white flex justify-center `}
        onMouseLeave={handleHover}
    >
        {label}
        {icon && <img src={icon} className="max-w-[20px] max-h-[20px]" />}
    </div>
}

export default LinkButton
