import * as React from "react"

export interface ToolboxSectionProps {
    title: string,
    items: string[],
}

const ToolboxSection = (props: ToolboxSectionProps) => (
    <div>
        <div className="py-[10px] px-[25px] border-r border-b border-[#5CD595] font-bold">
            {props.title}
        </div>
        <div className="py-[10px] px-[25px] flex flex-wrap gap-[30px] border-r border-[#5CD595]">
            {props.items.map((item) =>
                <div>{item}</div>
            )}
        </div>
    </div>
)

export default ToolboxSection
