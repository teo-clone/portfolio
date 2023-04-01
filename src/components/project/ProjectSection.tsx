import * as React from "react"
import Tag from "./Tag"

export interface ProjectSectionProps {
    title: string,
    paragraphs: string[]
    tagLabels?: string[]
}

const ProjectSection = (props: ProjectSectionProps) => (
    <>
        <div>
            {props.title}
        </div>
        <div className="flex flex-col gap-[15px]">
            {props.paragraphs?.map((paragraph) =>
                <div>{paragraph}</div>
            )}
            <div className="flex gap-[15px]">
                {props.tagLabels?.map((label) =>
                    <Tag label={label} />
                )}
            </div>
        </div>
    </>
)

export default ProjectSection