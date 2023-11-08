import * as React from "react"

interface AnimatedCarouselProps {
    label?: string,
    imgs: string[]
}

const AnimatedCarousel = ({ label, imgs }: AnimatedCarouselProps) => {
    return (
        <div className="flex justify-center max-w-[1300px] w-full ">
            <div className="flex flex-col items-center bg-slate-50 p-5 rounded-md gap-[25px] w-full">
                {label &&
                    <div className={"text-sm text-slate-400"}>
                        {label}
                    </div>}

                <div className="flex items-center gap-[25px] max-w-[1200px] w-full overflow-scroll">
                    {imgs.map((img, i) =>
                        <img src={img} className="max-w-xs w-full rounded-md" />
                    )}
                </div>
            </div>
        </div>
    )
};

export default AnimatedCarousel;