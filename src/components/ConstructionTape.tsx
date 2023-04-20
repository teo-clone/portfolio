import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';

const ConstructionTape: React.FC<PropsWithChildren> = ({ children }) => {
    const childRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [numRectangles, setNumRectangles] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        handleResize(); // set initial windowWidth;

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const lineHeight = 24; // a line is approximately 24 pixels tall

    useEffect(() => {
        // Calculate the number of yellow rectangles based on the height of the child element
        childRef.current && setNumRectangles(Math.ceil(childRef.current.offsetHeight / lineHeight));
    }, [children, windowWidth]);

    return (
        <div className="relative">
            {Array(numRectangles).fill(0).map((_, index) =>
                <div
                    key={index}
                    className={"absolute z-10 h-[6px] inset-0 bg-yellow-300"}
                    style={{ marginTop: `${(10 + (index * lineHeight))}px` }}
                />
            )}
            <div
                className="relative mb-2"
                ref={childRef}
            >
                {children}
            </div>
        </div>
    );
};
export default ConstructionTape;
