import * as React from "react"

export interface ThumbnailSectionProps {
    title: string,
    items: string[],
}

const ThumbnailSection = (props: ThumbnailSectionProps) => (
    <div>
        <div className="py-[10px] px-[25px] border-r-[1px] border-b-[1px] border-[#5CD595] font-bold text-sm">
            {props.title}
        </div>
        <div className="py-[10px] px-[25px] flex flex-wrap gap-[30px] border-r-[1px] border-[#5CD595] text-sm">
            {props.items.map((item) =>
                <div>{item}</div>
            )}
        </div>
    </div>
)

export default ThumbnailSection
