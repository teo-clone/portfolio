import * as React from "react"
import { Link } from "gatsby"

import { useMediaQuery } from "react-responsive";
import LinkButton from "./LinkButton";

export interface ImageProps {
    id: string,
    src: string,
    alt: string
}

export interface ProjectThumbnailProps {
    fullInfoUrl: string,
    title: string,
    timeline: string,
    description: string,
    image: ImageProps
}

const ProjectThumbnail = (props: ProjectThumbnailProps) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    return <>
        <div id="left" className="md:border-r border-b">
            <div className="flex flex-col">
                <div className="flex justify-between px-[20px] py-[25px] border-b">
                    <div className="font-bold">
                        {props.title}
                    </div>
                    <div className="font-bold">
                        {props.timeline}
                    </div>
                </div>
                <div className="px-[20px] py-[25px] flex flex-col gap-10">
                    <div className="max-w-[400px]">
                    {props.description}
                    </div>
                    <LinkButton
                        label={"More >>"}
                        to={props.fullInfoUrl}
                    />
                </div>
            </div>
        </div>

        <div id="right" className="border-b">
            <div className="px-[20px] py-[25px]">
                <img
                    className="wombo"
                    src={props.image.src}
                    alt={props.image.alt}
                />
            </div>
        </div>
    </>
}

export default ProjectThumbnail
