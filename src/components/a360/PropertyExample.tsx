import * as React from "react"

interface PropertyExampleProps {
    title: string,
    img: string,
    subtitle: string,
}

const PropertyExample = ({ title, img, subtitle }: PropertyExampleProps) => {
    return (
        <div className={"bg-slate-50 p-5 rounded-md flex flex-col gap-[15px]"}>
            <div className={"text-sm font-mono"}>
                {title}
            </div>
            <div className={"text-sm text-slate-400"}>
                {subtitle}
            </div>
            <div>
                <img className="max-w-[500px] w-full" src={img} alt={"alt"} />
            </div>

        </div>
    )
};

export default PropertyExample;