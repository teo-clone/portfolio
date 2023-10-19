import React from 'react';

type HoverGifinatorProps = {
    gifSrc: string;
    label: string;
    updateGif: (newGif: string | undefined) => void;
    lastOne?: boolean;
};

const HoverGifinator: React.FC<HoverGifinatorProps> = ({ gifSrc, label, updateGif, lastOne }) => {
    return (
        <div className='flex'>
            <div className='flex gap-[5px]'>
                {lastOne ? "or" : ""}

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

            {lastOne ? "." : ","}
        </div>
    );
};

export default HoverGifinator;