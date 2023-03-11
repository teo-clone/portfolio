import * as React from "react"
import ThumbnailSection from "./ToolboxSection"

const items = [
    "Typescript",
    "React.js",
    "Swift",
    "Node.js",
    "Java",
    "Python",
    "MobX",
    "CSS",
    "Github",
    "Cypress",
    "SQL",
]

const ToolboxCodeSection = () => (
    <ThumbnailSection
        title={"CODE"}
        items={items}
    />
)

export default ToolboxCodeSection
