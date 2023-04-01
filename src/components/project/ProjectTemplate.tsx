import * as React from "react"
import { Link } from "gatsby"
import Header from "../Header"
import ProjectSection from "./ProjectSection"
import { PropsWithChildren } from "react"
import x from "../../images/x.png"

export interface ProjectTemplateProps {
    title: string,
    role: string,
    toolkit: string,
    team: string,
    briefParagraphs: string[]
}

const ProjectTemplate = (props: PropsWithChildren<ProjectTemplateProps>) => (
    <div>
        <Header
            title={props.title}
            borderColor="border-blue"
        >
            <Link to="/">
                <img
                    className={"h-[15px] w-[15px]"}
                    src={x}
                />
            </Link>
        </Header>

        {/** 
            * TODO: move the grid grid-cols-[fit-content(100px)_auto] 
            *       style which is in 3 places belowto some kind of 
            *       SectionCollection component
            */}

        <div className="border-blue grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="md:border-r border-b px-[20px] py-[25px]">
                <div className="grid grid-cols-[fit-content(100px)_auto] gap-[30px]">
                    <ProjectSection
                        title={"MY ROLE"}
                        paragraphs={[props.role]}
                    />
                    <ProjectSection
                        title={"TOOLKIT"}
                        paragraphs={[props.toolkit]}
                    />
                    <ProjectSection
                        title={"TEAM"}
                        paragraphs={[props.team]}
                    />
                </div>
            </div>
            <div id="right" className="border-b px-[20px] py-[25px]">
                <div className="grid grid-cols-[fit-content(100px)_auto] gap-[30px]">
                    <ProjectSection
                        title={"BRIEF"}
                        paragraphs={props.briefParagraphs}
                    />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-[fit-content(100px)_auto] gap-[30px] px-[20px] py-[25px]">
            {props.children}
        </div>
    </div>
)

export default ProjectTemplate