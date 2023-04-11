import React from 'react';

type HoverGifinatorProps = {
    images: string[];
    sizeFactors: number[];
    label: string;
};

const HoverGifinator: React.FC<HoverGifinatorProps> = ({ images, sizeFactors, label }) => {
    const gifRef = React.useRef<HTMLImageElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        if (isPlaying && gifRef.current) {
            gifRef.current.src = images[0];
            let currentIndex = 1;

            const intervalId = setInterval(() => {
                if (gifRef.current) {
                    gifRef.current.src = images[currentIndex];
                }
                currentIndex = (currentIndex + 1) % images.length;
            }, 300);

            return () => clearInterval(intervalId);
        }
    }, [isPlaying, images]);

    const sizeClasses = sizeFactors.map((sizeFactor, index) => `w-${sizeFactor * 64} h-${sizeFactor * 64}`).join(' ');

    return (
        <div className="relative">
            <div
                className="absolute top-0 left-0 w-full h-full"
                onMouseEnter={() => setIsPlaying(true)}
                onMouseLeave={() => setIsPlaying(false)}
            >
                <span className="italic underline hover:cursor-pointer">{label}</span>
            </div>
            {isPlaying && (
                <img
                    ref={gifRef}
                    className={sizeClasses}
                    alt="hover-gifinator"
                />
            )}
        </div>
    );
};

export default HoverGifinator;