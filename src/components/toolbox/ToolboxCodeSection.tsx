import * as React from "react"
import ToolboxSection from "./ToolboxSection"

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
    <ToolboxSection
        title={"CODE"}
        items={items}
    />
)

export default ToolboxCodeSection
