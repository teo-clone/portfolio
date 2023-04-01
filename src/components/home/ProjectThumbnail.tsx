import * as React from "react"
import { Link } from "gatsby"

import Carousel, { ImageProps } from "./Carousel"

export interface ProjectThumbnailProps {
    fullInfoUrl: string,
    title: string,
    timeline: string,
    description: string,
    images: ImageProps[],
}

const ProjectThumbnail = (props: ProjectThumbnailProps) => (
    <>
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
                <div className="max-w-[400px] px-[20px] py-[25px] flex flex-col gap-10">
                    {props.description}
                    <Link to={props.fullInfoUrl}>{"More >>"}</Link>
                </div>
            </div>
        </div>

        <div id="right" className="border-b">
            <div className="px-[20px] py-[25px]">
                <Carousel
                    images={props.images}
                />
            </div>
        </div>
    </>
)

export default ProjectThumbnail
