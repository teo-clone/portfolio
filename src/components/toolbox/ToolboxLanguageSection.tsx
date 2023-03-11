import * as React from "react"
import ThumbnailSection from "./ToolboxSection"

const items = [
    "Greek",
    "English",
    "Some Spanish",
]

const ToolboxLanguageSection = () => (
    <ThumbnailSection
        title={"LANGUAGES"}
        items={items}
    />
)

export default ToolboxLanguageSection
