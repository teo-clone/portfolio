import * as React from "react"

import Carousel, { ImageProps } from "./Carousel"

export interface ProjectThumbnailProps {
    title: string,
    timeline: string,
    description: string,
    images: ImageProps[],
}

// TODO: componentify to hide more tailwind classes and to be sure that they all change the same !!

const ProjectThumbnail = (props: ProjectThumbnailProps) => (
    <div className="flex grow first:border-t-[1px] border-b-[1px] border-[#3B8BEB]">

        <div id="left" className="w-[50%] border-r-[1px] border-[#3B8BEB]">
            <div className="flex flex-col">
                <div className="flex justify-between px-[20px] py-[25px] border-b-[1px] border-[#3B8BEB]">
                    <div className="font-bold text-sm">
                        {props.title}
                    </div>
                    <div className="font-bold text-sm">
                        {props.timeline}
                    </div>
                </div>
                <div className="text-sm max-w-[400px] px-[20px] py-[25px]">
                    {props.description}
                </div>
            </div>
        </div>

        <div id="right" className="w-[50%]">
            <div className="px-[20px] py-[25px]">
                <div className="text-sm">
                    <Carousel
                        images={props.images}
                    />
                </div>
            </div>
        </div>

    </div>
)

export default ProjectThumbnail
