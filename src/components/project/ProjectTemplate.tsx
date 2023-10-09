import * as React from "react"
import { Link } from "gatsby"
import Header from "../Header"
import { PropsWithChildren } from "react"
import x from "../../images/x.png"
import KeyInfoSection from "./KeyInfoSection"

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

        <div className="border-blue grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="md:border-r border-b px-[20px] py-[30px]">
                <div className={"flex flex-col gap-[15px]"}>
                    <KeyInfoSection
                        title={"MY ROLE"}
                        texts={[props.role]}
                    />
                    <KeyInfoSection
                        title={"TOOLKIT"}
                        texts={[props.toolkit]}
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
                />
            </div>
        </div>

        <div className="border-blue grid md:grid-cols-[200px_auto] grid-cols-1">
            {props.children}
        </div>
    </div>
)

export default ProjectTemplate