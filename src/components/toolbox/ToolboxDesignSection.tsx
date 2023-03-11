import * as React from "react"
import ToolboxSection from "./ToolboxSection"

const items = [
    "Figma",
    "Sketch",
    "Illustrator",
    "Photoshop",
]

const ToolboxDesignSection = () => (
    <ToolboxSection
        title={"DESIGN"}
        items={items}
    />
)

export default ToolboxDesignSection
