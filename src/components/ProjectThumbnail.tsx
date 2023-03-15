import * as React from "react"

import Carousel, { ImageProps } from "./Carousel"

export interface ProjectThumbnailProps {
    title: string,
    timeline: string,
    description: string,
    images: ImageProps[],
}

const ProjectThumbnail = (props: ProjectThumbnailProps) => (
    <>
        <div id="left" className="border-r border-b">
            <div className="flex flex-col">
                <div className="flex justify-between px-[20px] py-[25px] border-b">
                    <div className="font-bold">
                        {props.title}
                    </div>
                    <div className="font-bold">
                        {props.timeline}
                    </div>
                </div>
                <div className="max-w-[400px] px-[20px] py-[25px]">
                    {props.description}
                </div>
            </div>
        </div>

        <div id="right" className="border-b">
            <div className="px-[20px] py-[25px]">
                <div>
                    <Carousel
                        images={props.images}
                    />
                </div>
            </div>
        </div>
    </>
)

export default ProjectThumbnail
