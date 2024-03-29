import * as React from "react"

export interface ToolboxSectionProps {
    title: string,
    items: string[],
}

const ToolboxSection = (props: ToolboxSectionProps) => (
    <div className="flex grow flex-col border-b">
        <div className="py-[30px] px-[20px] border-r border-b font-bold">
            {props.title}
        </div>
        <div className="py-[30px] px-[20px] flex flex-wrap grow gap-[30px] border-r">
            {props.items.map((item, i) =>
                <div key={i}>{item}</div>
            )}
        </div>
    </div>
)

export default ToolboxSection
