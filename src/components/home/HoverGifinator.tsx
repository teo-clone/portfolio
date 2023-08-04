import React from 'react';

type HoverGifinatorProps = {
    gifSrc: string;
    label: string;
};

const HoverGifinator: React.FC<HoverGifinatorProps> = ({ gifSrc, label }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [imgIndex, setImgIndex] = React.useState(0);

    return (
        <div>
            <div className="relative">
                <div
                    className=""
                    onMouseEnter={() => setIsPlaying(true)}
                    onMouseLeave={() => setIsPlaying(false)}
                >
                <span className="italic underline hover:cursor-pointer">{label}</span>
                </div>
                {isPlaying && (
                    <img
                        src={gifSrc}
                        alt="hover-gifinator"
                    />
                )}
            </div>
        </div>
    );
};

export default HoverGifinator;