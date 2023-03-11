import * as React from "react"
import ThumbnailSection from "./ToolboxSection"

const items = [
    "Figma",
    "Sketch",
    "Illustrator",
    "Photoshop",
]

const ToolboxDesignSection = () => (
    <ThumbnailSection
        title={"DESIGN"}
        items={items}
    />
)

export default ToolboxDesignSection
