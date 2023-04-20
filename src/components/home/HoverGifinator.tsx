import React from 'react';

type Image = {
    src: string;
    sizeFactor: number;
};

type HoverGifinatorProps = {
    images: Image[];
    label: string;
};

const HoverGifinator: React.FC<HoverGifinatorProps> = ({ images, label }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [imgIndex, setImgIndex] = React.useState(0);

    React.useEffect(() => {
        if (isPlaying) {
            setImgIndex(0);

            const intervalId = setInterval(() => {
                setImgIndex((imgIndex) => (imgIndex + 1) % images.length)
            }, 700);

            return () => clearInterval(intervalId);
        }
    }, [isPlaying, images]);

    const image = images[imgIndex];

    return (
        // TODO: should this mb-4 remain ? how do we put some space under
        <div className="relative mb-4">
            <div
                className="absolute top-0 left-0"
                onMouseEnter={() => setIsPlaying(true)}
                onMouseLeave={() => setIsPlaying(false)}
            >
                <span className="italic underline hover:cursor-pointer">{label}</span>
            </div>
            {isPlaying && (
                <img
                    src={image.src}
                    style={{ width: `${image.sizeFactor * 100}%`, height: `${image.sizeFactor * 100}%` }}
                    alt="hover-gifinator"
                />
            )}
        </div>
    );
};

export default HoverGifinator;