import React, { useState, useEffect } from "react";
import warning from "../images/warning.png"
import under_construction from "../images/under_construction.png"

const UnderConstruction: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Toggle visibility state every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 2000);

        // Clean up the interval on unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div
            className={`${isVisible ? "opacity-100" : "opacity-0"} 
                transition-opacity duration-500 ease-in-out 
                flex flex-row items-center gap-[5px]`}
        >
            <img className="h-[50px] w-[55px]" src={under_construction} />
            {/* <div className="text-sm font-bold text-yellow-300">Under Construction</div> */}
        </div>
    );
};

export default UnderConstruction;
