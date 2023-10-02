import * as React from "react"

interface PropertyExampleProps {
    title: string,
    img: string,
    subtitle: string,
    widthPx: string,
}

const PropertyExample = ({ title, img, subtitle, widthPx }: PropertyExampleProps) => {
    return (
        <div className={"bg-slate-50 p-5 rounded-md flex flex-col gap-[15px]"}>
            <div className={"text-sm font-mono"}>
                {title}
            </div>
            <div className={"text-sm font-extralight text-slate-400"}>
                {subtitle}
            </div>
            <div>
                <img style={{ minWidth: `${widthPx}px`, maxWidth: `${widthPx}px` }} src={img} alt={"alt"} />
            </div>

        </div>
    )
};

export default PropertyExample;