import * as React from "react"
import { Link } from "gatsby"

import { useMediaQuery } from "react-responsive";
import LinkButton from "../LinkButton";
import GatsbyLinkButton from "../GatsbyLinkButton";

import double_right from "../../images/double_right.png"

export interface ImageProps {
    id: string,
    src: string,
    alt: string
}

export interface ProjectThumbnailProps {
    title: string,
    timeline: string,
    description: string,
    image: ImageProps
}

const ProjectThumbnail = (props: React.PropsWithChildren<ProjectThumbnailProps>) => {

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
                    {props.children && <div className="flex flex-col gap-[20px]">
                        {props.children}
                    </div>}
                </div>
            </div>
        </div>

        <div id="right" className="border-b">
            <div className="px-[20px] py-[25px] flex justify-center items-center">
                <img
                    className="flex max-h-[700px] h-full"
                    src={props.image.src}
                    alt={props.image.alt}
                />
            </div>
        </div>
    </>
}

export default ProjectThumbnail
