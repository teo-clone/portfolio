import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"

const Bathwall = () => (
    <ProjectTemplate
        title={"BATHROOM WALL"}
        role={"Full-stack Web Application Development, Product Design"}
        team={"Just me"}
        briefParagraphs={[
            "Bathroom wall is a web application that allows users to create a shared wall of text and image at a particular bar on a particular day",
        ]}
        liveLink={"https://bathwall.xyz"}
    >
        <DetailsSection
            title={"INFO"}
            tags={[]}
        >
            <p>
                {"Bathroom wall is currently being developed, the best way to learn more about the project is by visiting the public "}
                <a href="https://github.com/teo-clone/bathroom_wall" target="_blank" className="text-blue underline">github repository</a>
            </p>



        </DetailsSection>

    </ProjectTemplate>
)

export default Bathwall

export function Head() {
    return (
        <>
            <title>{"Bathroom Wall"}</title>
        </>
    )
}
