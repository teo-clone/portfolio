import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"

const Intus = () => (
    <ProjectTemplate
        title={"STATTON"}
        role={"Everything"}
        toolkit={"Full-stack Development, Product Design"}
        team={"Currently just me"}
        briefParagraphs={["Statton is a website that poses its users with a daily multiple choice question and allows them to view how the rest of the world responded. <Add a live link here>"]}
    >
        <DetailsSection
            title={"THE IDEA"}
            tags={[]}
        >
        </DetailsSection>

        <DetailsSection
            title={"WIREFRAMES"}
            tags={[
            ]}
        >
        </DetailsSection>

        <DetailsSection
            title={"MOCKUPS / MOODBOARD"}
            tags={[]}
        >
            <p>show statton character vibes ... moodboard pics in desktop statton folder</p>
        </DetailsSection>

        <DetailsSection
            title={"DEVELOPMENT"}
            tags={[]}
        >
            <p>Talk about dev stack, process</p>
        </DetailsSection>

        <DetailsSection
            title={"FUTURE"}
            tags={[]}
        >
            <p>With more data more interesting results. Number sign up for user notifications and also response tracking, showing history and all that.</p>
        </DetailsSection>

    </ProjectTemplate>
)

export default Intus
