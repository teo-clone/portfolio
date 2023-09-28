import * as React from "react"

interface PropertyExampleProps {
    title: string,
    img: string,
    subtitle: string,
    minWidthPx: string,
    widthPx: string,
}

const PropertyExample = ({ title, img, subtitle, minWidthPx, widthPx }: PropertyExampleProps) => {
    return (
        <div className={"flex flex-col gap-[15px]"}>
            <div className={"text-sm font-mono"}>
                {title}
            </div>
            <div>
                <img style={{ minWidth: `${minWidthPx}px`, maxWidth: `${widthPx}px` }} src={img} alt={"alt"} />
            </div>
            <div className={"text-sm font-extralight text-slate-400"}>
                {subtitle}
            </div>
        </div>
    )
};

export default PropertyExample;