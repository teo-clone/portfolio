import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"

const Bathwall = () => (
    <ProjectTemplate
        title={"STATTON"}
        role={"Full-stack Web Application Development, Product Design"}
        team={"Just me"}
        briefParagraphs={[
            "Statton is a website that poses its users with a daily multiple choice question and allows them to view how the rest of the world responded.",
        ]}
        liveLink={"https://statton.netlify.app"}
    >
        <DetailsSection
            title={"THE IDEA"}
            tags={[]}
        >
            <p>On Statton, users answer a universal multiple choice question every day. After responding, they can view where they stand compared to the rest of the users.</p>

        </DetailsSection>

    </ProjectTemplate>
)

export default Bathwall
