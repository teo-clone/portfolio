import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';

const ConstructionTape: React.FC<PropsWithChildren> = ({ children }) => {
    const childRef = useRef<HTMLDivElement>(null);
    const [numRectangles, setNumRectangles] = useState(0);

    useEffect(() => {
        // Calculate the number of yellow rectangles based on the height of the child element
        const childElement = childRef.current;
        console.log(childElement?.offsetHeight)
        childElement && setNumRectangles(Math.ceil(childElement.offsetHeight / 24));
    }, [children]);

    return (
        <div className="relative">
            {React.Children.map(children, (child, index) => (
                <>
                    {Array(numRectangles).fill(0).map((_, index) =>
                        <div
                            key={index}
                            className={"absolute z-10 h-[6px] inset-0 bg-yellow-300"}
                            style={{ marginTop: `${(10 * (index + 1))}px` }}
                        />
                    )}
                    <div
                        key={index}
                        className="relative mb-2"
                        style={{ display: 'inline-block' }}
                        ref={childRef}
                    >
                        {child}
                    </div>
                </>
            ))}
        </div>
    );
};
export default ConstructionTape;
