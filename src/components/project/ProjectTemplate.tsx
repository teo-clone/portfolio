import * as React from "react"
import { Link } from "gatsby"
import Header from "../Header"
import { PropsWithChildren } from "react"
import x from "../../images/x.png"
import KeyInfoSection from "./KeyInfoSection"
import GatsbyLinkButton from "../GatsbyLinkButton"

export interface ProjectTemplateProps {
    title: string,
    role: string,
    team: string,
    liveLink?: string,
    briefParagraphs: string[]
}

const ProjectTemplate = (props: PropsWithChildren<ProjectTemplateProps>) => (
    <div>
        <Header
            title={props.title}
            borderColor="header-blue"
        >
            <GatsbyLinkButton
                label={"Close"}
                to={"/"}
            />
        </Header>

        <div className="border-blue grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="md:border-r border-b px-[20px] py-[30px]">
                <div className={"flex flex-col gap-[15px]"}>
                    <KeyInfoSection
                        title={"MY ROLE"}
                        texts={[props.role]}
                    />
                    <KeyInfoSection
                        title={"TEAM"}
                        texts={[props.team]}
                    />
                </div>
            </div>
            <div id="right" className="border-b px-[20px] py-[30px]">
                <KeyInfoSection
                    title={"BRIEF"}
                    texts={props.briefParagraphs}
                    liveLink={props.liveLink}
                />
            </div>
        </div>

        <div className="border-blue grid md:grid-cols-[200px_auto] grid-cols-1">
            {props.children}
        </div>
    </div>
)

export default ProjectTemplate