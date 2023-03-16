import * as React from "react"
import ToolboxSection from "./ToolboxSection"

const items = [
    "Greek",
    "English",
    "Some Spanish",
]

const ToolboxLanguageSection = () => (
    <ToolboxSection
        title={"LANGUAGES"}
        items={items}
    />
)

export default ToolboxLanguageSection
