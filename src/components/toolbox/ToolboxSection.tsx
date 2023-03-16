import * as React from "react"

export interface ToolboxSectionProps {
    title: string,
    items: string[],
}

const ToolboxSection = (props: ToolboxSectionProps) => (
    <div className="flex flex-col border-b">
        <div className="py-[10px] px-[25px] border-r border-b font-bold">
            {props.title}
        </div>
        <div className="py-[10px] px-[25px] flex flex-wrap grow gap-[30px] border-r">
            {props.items.map((item) =>
                <div>{item}</div>
            )}
        </div>
    </div>
)

export default ToolboxSection
