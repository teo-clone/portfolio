import React from 'react';

type HoverGifinatorProps = {
    gifSrc: string;
    label: string;
    updateGif: (newGif: string | undefined) => void;
};

const HoverGifinator: React.FC<HoverGifinatorProps> = ({ gifSrc, label, updateGif }) => {
    return (
        <div>
            <div className="bg-yellow-100 relative">
                <div
                    className=""
                    onMouseEnter={() => updateGif(gifSrc)}
                    onMouseLeave={() => updateGif(undefined)}
                >
                    <span className="hover:cursor-pointer whitespace-nowrap">{label}</span>
                </div>
            </div>
        </div>
    );
};

export default HoverGifinator;