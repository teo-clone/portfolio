import * as React from "react"

interface PropertyExampleProps {
    title: string,
    img: string,
    subtitle: string,
}

const PropertyExample = ({ title, img, subtitle }: PropertyExampleProps) => {
    return (
        <div className={"flex flex-col gap-[15px]"}>
            <div className={"text-sm font-mono"}>
                {title}
            </div>
            <div className="w-[400px]">
                <img src={img} alt={"alt"} />
            </div>
            <div className={"text-sm text-slate-400"}>
                {subtitle}
            </div>
        </div>
    )
};

export default PropertyExample;